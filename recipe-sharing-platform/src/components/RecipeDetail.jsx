import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json"; // Adjust path based on your structure

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.recipes.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-900">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full rounded-lg my-4" />
      
      <h2 className="text-xl font-semibold text-gray-700 mt-4">Ingredients</h2>
      <ul className="list-disc pl-5 mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-800">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">Instructions</h2>
      <ol className="list-decimal pl-5 mt-2">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-800">{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;