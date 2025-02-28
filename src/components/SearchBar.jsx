import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const setFilterCriteria = useRecipeStore((state) => state.setFilterCriteria);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by recipe name..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by ingredients..."
        onChange={(e) => setFilterCriteria({ ingredients: e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Prep Time (mins)"
        onChange={(e) => setFilterCriteria({ prepTime: e.target.value })}
      />
    </div>
  );
};

export default SearchBar;