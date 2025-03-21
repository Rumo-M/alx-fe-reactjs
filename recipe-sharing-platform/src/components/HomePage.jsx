import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import recipeData from '../data.json'; // Import mock data

function HomePage() {
  const [recipes, setRecipes] = useState([]); // Initialize state

  useEffect(() => {
    // Mimicking data fetching by loading the mock data
    setRecipes(recipeData); // Set the recipes to state
  }, []); // Empty dependency array ensures it runs once

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 shadow-md rounded-lg">
            <img
              src={recipe.image}
              alt={recipe.title} // Use title, not name
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2> {/* Use title */}
            
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
