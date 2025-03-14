import useRecipeStore  from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites) || [];
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove from favourite</button>
        </div>
      ))}
      
    </div>
  );
};
export default FavoritesList;