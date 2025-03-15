import { Link } from "react-router-dom";

const Navbar = ()=> {


    return (
        <nav>
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/add-recipe">Add Recipe</Link></li>
                <li><Link to= "/recipe">Recipes</Link></li>
                <li><Link to= "/favorite">Favorites</Link></li>   
                <li><Link to= "/recommended">Recommended Recipes</Link></li>    
            </ul>
        </nav>

    )
}
export default Navbar;