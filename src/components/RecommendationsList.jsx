import useRecipeStore  from './recipeStore';

const Recommended = () => {
  const recommendations = useRecipeStore(state => state.recommendations) || [];
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <div>
      <h2>Recommeded Recipes</h2>
      <button onClick={generateRecommendations}>Generate Recommended Recipes</button>

      {recommendations.length === 0 ? (
        <p>No recommendations available. Add some favorite recipes first!</p>
      ) : (
        
        recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))
      )}
      
    </div>
  );
};
export default Recommended;