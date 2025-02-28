import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filterCriteria: { ingredients: '', prepTime: '' }, // Additional filters
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Trigger filtering
  },

  setFilterCriteria: (criteria) => {
    set({ filterCriteria: { ...get().filterCriteria, ...criteria } });
    get().filterRecipes(); // Trigger filtering
  },

  filterRecipes: () => {
    const { recipes, searchTerm, filterCriteria } = get();
    
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCriteria.ingredients === '' ||
        recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(filterCriteria.ingredients.toLowerCase())
        )) &&
      (filterCriteria.prepTime === '' || recipe.prepTime <= filterCriteria.prepTime)
    );

    set({ filteredRecipes: filtered });
  },

  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
}));

export default useRecipeStore;