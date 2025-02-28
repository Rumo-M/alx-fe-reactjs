import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';  // Ensure path is correct
import RecipeList from './components/RecipeList';  // Ensure path is correct
import SearchBar from './components/SearchBar';  // Ensure path is correct

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      
      <SearchBar />
      <AddRecipeForm />  {/* This is where AddRecipeForm is used */}
      <RecipeList />  {/* This is where RecipeList is used */}
    </div>
  );
};

export default App;