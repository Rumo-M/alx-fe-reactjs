// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';


const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Add this line

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/recipes'); // Add this line
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
