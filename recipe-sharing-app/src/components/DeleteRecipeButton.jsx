// components/DeleteRecipeButton.js
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return <button onClick={() => { deleteRecipe(recipeId); onDelete(); }}>Delete</button>;
};

export default DeleteRecipeButton;