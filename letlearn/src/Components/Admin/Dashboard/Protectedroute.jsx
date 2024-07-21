// ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const adminProtectedRoute = ({ element, adminRoute, isAdmin, ...rest }) => {
  if (!element) {
    return null;
  }

  if (adminRoute && !isAdmin) {
    // Redirect if it's an admin route, but the user is not an admin
    return <Navigate to="/" replace />;
  }

  // Render the route if authentication and admin checks pass
  return <Route {...rest} element={element} />;
};

export default adminProtectedRoute;
