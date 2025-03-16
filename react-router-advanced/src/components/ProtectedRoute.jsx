import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // We'll create this later

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();  // Assuming you have an 'isAuthenticated' value in your Auth context

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  return element;  // Render the protected route if authenticated
};

export default ProtectedRoute;