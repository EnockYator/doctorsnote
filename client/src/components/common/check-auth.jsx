/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

/**
 *   Checks Authentication and redirects users to respective pages
 * @param {boolean} isAuthenticated - whether the user is authenticated or not
 * @param {object} user - the user (admin or normal user)
 * @param {component} children - the components to be rendered if the conditions are met
 * @returns {component} - the components to be rendered if conditions are met
 */
function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Redirect unauthorized users to auth pages if they're not at login or register
  if (!isAuthenticated && 
      !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect admin to respective pages if they're at public pages
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("/")) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Redirect users to respective pages if they're at public pages
  if (isAuthenticated && user?.role === "user" && location.pathname.includes("/")) {
    return <Navigate to="/shop/home" />;
  }

  // Redirect authenticated users to respective pages if they're at login or register
  if (isAuthenticated && 
      (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // Unauthorized access of normal users to admin pages (redirect to home)
  if (isAuthenticated && user?.role === "user" && location.pathname.includes("/admin")) {
    return <Navigate to="/shop/home" />;
  }

  // Unauthorized access of admin to shop-view pages (redirect to admin dashboard)
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Normal flow (render the child components if conditions are met)
  return <>{children}</>;
}

export default CheckAuth;