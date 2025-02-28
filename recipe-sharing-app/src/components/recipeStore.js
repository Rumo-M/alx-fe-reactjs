import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  // Search functionality
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered recipes based on search term
  get filteredRecipes() {
    const { recipes, searchTerm } = get();
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  // Add a recipe to favorites and update recommendations
  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
      get().generateRecommendations(); // Update recommendations
    }
  },

  // Remove a recipe from favorites and update recommendations
  removeFavorite: (recipeId) => {
    set((state) => {
      const updatedFavorites = state.favorites.filter((id) => id !== recipeId);
      return { favorites: updatedFavorites };
    });
    get().generateRecommendations(); // Update recommendations
  },

  // Check if a recipe is marked as favorite
  isFavorite: (recipeId) => {
    return get().favorites.includes(recipeId);
  },

  // Generate personalized recommendations based on favorites and shared ingredients
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Recommendation logic: filter recipes based on shared ingredients with favorites
    const recommended = recipes.filter((recipe) =>
      favorites.includes(recipe.id) ||
      recipe.ingredients.some((ingredient) =>
        recipes.some(
          (fav) =>
            favorites.includes(fav.id) && fav.ingredients.includes(ingredient)
        )
      )
    );

    // Update recommendations state
    set({ recommendations: recommended.slice(0, 5) }); // Limit to top 5 recommendations
  },
}));
