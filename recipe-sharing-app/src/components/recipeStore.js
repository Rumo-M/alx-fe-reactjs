import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],

  addFavorite: (recipeId) => {
    const { favorites } = get();
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  isFavorite: (recipeId) => {
    return get().favorites.includes(recipeId);
  },

  recommendations: [],
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Recommendation logic based on shared ingredients or favorite history
    const recommended = recipes.filter((recipe) =>
      favorites.includes(recipe.id) || 
      recipe.ingredients.some(ing => 
        recipes.find(fav => favorites.includes(fav.id) && fav.ingredients.includes(ing))
      )
    );

    set({ recommendations: recommended.slice(0, 5) }); // Limit to 5 recommendations
  },
}));