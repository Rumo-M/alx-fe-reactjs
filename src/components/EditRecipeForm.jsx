import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const navigate = useNavigate(); // Navigation after editing
  

  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Find the recipe to edit
  const recipeToEdit = recipes.find((recipe) => recipe.id === parseInt(id, 10));

  // Initialize state with existing values
  const [title, setTitle] = useState(recipeToEdit?.title || "");
  const [description, setDescription] = useState(recipeToEdit?.description || "");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description) {
      alert("Title and description cannot be empty!");
      return;
    }

    updateRecipe({ id: parseInt(id), title, description });
    navigate("/"); // Redirect to home or recipe list after updating
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{ marginBottom: "10px", width: "100%" }}
        />
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={{ width: "100%", height: "100px" }}
        />
        <br />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;