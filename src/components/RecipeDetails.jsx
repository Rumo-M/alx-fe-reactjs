// RecipeDetails component
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const {id} = useParams()
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );
  if(!recipe) return <h2>Recipe not found</h2>


  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}

    <Link to = {`/edit/${recipe.id}`}  >
    <button>Edit</button>
    </Link>

    </div>
  );
};
export default RecipeDetails;