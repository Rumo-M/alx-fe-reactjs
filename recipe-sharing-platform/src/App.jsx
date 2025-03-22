import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Future route for Recipe Detail Page */}
          {/* <Route path="/recipe/:id" element={<RecipeDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
