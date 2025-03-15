// RecipeList component
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore ((state)=>state.addFavorites)
  const deleteRecipe = useRecipeStore ((state) => state.deleteRecipe)
  return (
    <div style={{marginLeft: "100px"}}>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3> <Link to = {`/recipe/${recipe.id}`}>{recipe.title}</Link> </h3>
          <p>{recipe.description}</p>

          {/* Add to favourite */}
          <button onClick={()=> addFavorite(recipe)}>Add to Favorite ❤️</button>


          {/* delete button */}
          <button onClick={() => deleteRecipe(recipe.id)}> Delete ❌ </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;