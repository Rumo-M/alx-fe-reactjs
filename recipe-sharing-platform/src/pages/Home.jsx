import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {data.recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-lg font-semibold mt-2">{recipe.name}</h2>
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