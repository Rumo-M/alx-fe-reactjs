import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";


function DeleteRecipe(){
const navigate = useNavigate()
const {recipes, deleteRecipe} = useRecipeStore()
return(
    <>
    <h2>Recipes</h2>
<ul>
  {recipes.map((recipe)=> (
    <li key={recipe.id}>
      {recipe.title}- {recipe.description}
    
    <button onClick={() => {deleteRecipe(recipe.id); navigate("/");}}>Delete</button>
    
    </li>


  ))}

</ul>
    
    </>
)}
export default DeleteRecipe;