import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';  // Import BlogPost component
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected route for Profile */}
          <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} />
          
          {/* Dynamic route for blog posts */}
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* 404 Not Found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;