import { useState } from "react";

function AddRecipeForm({ onRecipeSubmit }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if fields are filled
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required.");
      return;
    }

    // Validation: Ensure at least 2 ingredients
    const ingredientsArray = ingredients.split(",").map((item) => item.trim());
    if (ingredientsArray.length < 2) {
      setError("Please add at least two ingredients.");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      id: Date.now(), // Generate a unique ID
      name: title,
      ingredients: ingredientsArray,
      instructions: steps.split(".").map((step) => step.trim()), // Split steps into an array
    };

    // Submit the new recipe
    onRecipeSubmit(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-300"
            placeholder="E.g., Chicken, Salt, Pepper"
          />
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps (separate by periods)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-300"
            placeholder="Step 1. Step 2. Step 3."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;