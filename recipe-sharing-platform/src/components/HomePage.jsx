// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import recipeData from '../data.json'; // Import mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Mimicking data fetching (could use API in a real app)
    setRecipes(recipeData);
  }, []); // Empty dependency array ensures it runs once after component mounts

  return (
    <div className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
       
