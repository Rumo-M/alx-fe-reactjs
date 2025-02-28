// components/RecipeList.js
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';
import RecipeList from './components/lists/RecipeList'; 

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;