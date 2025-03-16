// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './components/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Nested Profile Route */}
        <Route path="/profile/*" element={<Profile />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;