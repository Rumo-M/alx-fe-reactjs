import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Steps are required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form data here
      console.log('Form submitted:', title, ingredients, steps);
    }
  };

  return (
    <div className="max-w-md md:max-w-md mx-auto p-4 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-lg font-medium" htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full p-2 text-lg font-medium border border-gray-300 rounded"
          />
          {errors.title && <div className="text-red-500 text-lg font-medium">{errors.title}</div>}
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium" htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
            className="w-full p-2 text-lg font-medium border border-gray-300 rounded"
          />
          {errors.ingredients && <div className="text-red-500 text-lg font-medium">{errors.ingredients}</div>}
        </div>
        <div className="mb-4">
          <label className="text-lg font-medium" htmlFor="steps">Steps:</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(event) => setSteps(event.target.value)}
            className="w-full p-2 text-lg font-medium border border-gray-300 rounded"
          />
          {errors.steps && <div className="text-red-500 text-lg font-medium">{errors.steps}</div>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Recipe
        </button>
        <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium">
          Back to Home
        </Link>
      </form>
    </div>
  );
}

export default AddRecipeForm;
