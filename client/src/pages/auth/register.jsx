import { registerUser } from "@/store/auth-slice";
import CommonForm from "./../../components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  userName: '',
  email: '',
  password: '',
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);  // New state for loading
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Basic form validation before submitting
  function validateForm(data) {
    if (!data.email || !data.password) {
      return "All fields are required!";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      return "Please enter a valid email address.";
    }
    return null;
  }

  async function onSubmit(event) {
    event.preventDefault();

    const validationError = validateForm(formData);
    if (validationError) {
      toast({
        title: "Validation Error",
        description: validationError,
        className: "bg-toastError text-white max-w-md h-16 fixed top-2 left-1/2fixed top-2 left-1/2 transform -translate-x-1/2 z-50",
        duration: 3000,
      });
      return;
    }

    try {
      setIsLoading(true); // Set loading to true when submitting
      const result = await dispatch(registerUser(formData)).unwrap();
      toast({
        title: "Success",
        description: result.message, // Message from backend registerUser endpoint
        className: "bg-toastSuccess  text-white max-w-md h-16 fixed top-2 left-1/2fixed top-2 left-1/2 transform -translate-x-1/2 z-50",
        duration: 3000,
      });
      // Redirect to login page
      navigate("/auth/login");
    } catch (error) {
      toast({
        title: "Failed",
        description: error.message || "An unexpected error occurred.",
        className: "bg-toastError  text-white max-w-md h-16 fixed top-2 left-1/2fixed top-2 left-1/2 transform -translate-x-1/2 z-50",
        duration: 3000,
      });
    } finally {
      setIsLoading(false); // Set loading to false after request completion
    }
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create an Account
        </h1>
        <p className="mt-2">
          Already have an account?
          <Link
            className="font-medium text-primary hover:underline ml-2"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={isLoading ? 'Signing Up...' : 'Sign Up'} // Change button text based on loading state
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        disabled={isLoading} // Disable form while loading
      />
    </div>
  );
}

export default AuthRegister;
