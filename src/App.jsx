import "./App.css"
import useRecipeStore from "./components/recipeStore";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import DeleteRecipe from "./components/DeleteRecipeButton";
import EditRecipeForm from "./components/EditRecipeForm";
import FavoritesList from "./components/FavoritesList";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App(){

  return (
 <>
 <SearchBar />
 {/* <DeleteRecipe /> */}
 {/* Router */}
   <div>
     <Navbar/>
   <Routes>
     <Route path="/"  element = {<Home/>} />
     <Route path="/add-recipe"  element = {<AddRecipeForm/>} />
     <Route path="/recipe" element = {<RecipeList/>} />
     <Route path="/favorite"  element = {<FavoritesList/>} />
     <Route path="/recommended"  element = {<Recommended/>} />
  </Routes>
   </div>
  
     
 
 </>
 )}
 export default App;