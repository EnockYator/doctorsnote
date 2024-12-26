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

  // Redirect all users to respective pages if they're at public pages
  if (isAuthenticated && (user?.role === "customer" || user?.role === "doctor" || user?.role === "admin") && 
      location.pathname.includes("/")) {
    if (user?.role === "customer") {
      return <Navigate to="/shop/home" />;
    }
    if (user?.role === "doctor") {
      return <Navigate to="/doctor/dashboard" />;
    }
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    }
  }

  // Redirect authenticated users to respective pages if they're at login or register
  if (isAuthenticated && 
      (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } if (user?.role === "customer"){
      return <Navigate to="/shop/home" />;
    } if (user?.role === "doctor"){
      return <Navigate to="/doctor/dashboard" />;
    }
  }

  // Unauthorized access of customers and doctors to admin pages
  if (isAuthenticated && (user?.role === "customer" || user?.role === "doctor") && location.pathname.includes("/admin")) {
    if (user?.role === "customer") {
      return <Navigate to="/shop/home" />;
    } 
    if (user?.role === "doctor"){
      return <Navigate to="/doctor/dashboard" />;
    }
  }

  // Unauthorized access of admin to customer-view and doctor-view pages (redirect to admin dashboard)
  if (isAuthenticated && user?.role === "admin" && (location.pathname.includes("/shop") || location.pathname.includes("/doctor"))) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Normal flow (render the child components if conditions are met)
  return <>{children}</>;
}

export default CheckAuth;