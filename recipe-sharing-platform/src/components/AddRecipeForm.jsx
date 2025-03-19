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
    <div className="max-w-md md:max-w-md mx-auto">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
          />
          {errors.ingredients && <div style={{ color: 'red' }}>{errors.ingredients}</div>}
        </div>
        <div>
          <label>Steps:</label>
          <textarea
            value={steps}
            onChange={(event) => setSteps(event.target.value)}
          />
          {errors.steps && <div style={{ color: 'red' }}>{errors.steps}</div>}
        </div>
        <button type="submit">Add Recipe</button>
        <Link to="/">Back to Home</Link>
      </form>
    </div>
  );
}

export default AddRecipeForm;
