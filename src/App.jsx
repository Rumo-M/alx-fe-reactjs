import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';  // <-- Ensure this path is correct
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      
      <SearchBar />
      <AddRecipeForm />  {/* Add the AddRecipeForm component here */}
      <RecipeList />
    </div>
  );
};

export default App;
