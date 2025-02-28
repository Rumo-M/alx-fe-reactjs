import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';  
import RecipeList from './components/RecipeList';  
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';
 

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      
      <SearchBar />
      <AddRecipeForm /> 
      <RecipeList /> 
    </div>
  );
};

export default App;