// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import Home from './components/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </Router>
);

export default App;