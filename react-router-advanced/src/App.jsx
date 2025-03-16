import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Ensure this file exists
import Login from './pages/Login';  // Ensure this file exists
import Profile from './pages/Profile';  // Ensure this file exists
import NotFound from './pages/NotFound';  // Ensure this file exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;