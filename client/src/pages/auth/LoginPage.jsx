import { loginUser } from "@/store/auth-slice";
import { setAuth } from "@/store/auth-slice"; // Import the setAuth action
import { useToast } from "@/hooks/use-toast";
import CommonForm from "./../../components/common/form";
import { loginFormControls} from "@/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const initialState = {
    email : '',
    password : ''
}

function AuthLogin() {
  const [isLoading, setIsLoading] = useState(false);  // New state for loading
    const [formData, setFormData] = useState(initialState);
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
          className: "bg-toastError text-white max-w-md h-16 z-50",
          duration: 3000,
        });
        return;
      }
    
      try {
        setIsLoading(true);
        const result = await dispatch(loginUser(formData)).unwrap();
        toast({
          title: "Success",
          description: result.message, // Message from backend registerUser endpoint  
          className: "bg-toastSuccess text-white max-w-md h-16 z-50",
          duration: 3000,
        });

        // Dispatch the setAuth action to update the Redux state
        dispatch(setAuth({
            
            user: result.user,  // User data from the response (including role, etc.)
            token: result.token, // JWT token from the response
      }));

        // Redirect based on user role after successful login
        if (result.userRole === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/shop/home");
        }
        
      } catch (error) {
        toast({
          title: "Failed",
          description: error, // Display error message from backend
          className: "bg-toastError text-white max-w-md h-16 z-50 ",
          duration: 3000,
        });
      } finally {
        setIsLoading(false); // Set loading to false after request completion
      }
    }
    
  
    console.log(formData);

    return ( 
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-xl md:text-3xl text-blue-700 font-bold tracking-tight text-foreground ">Sign in to your account</h1>
            </div>
        <CommonForm
        formControls={loginFormControls}
        buttonText={isLoading ? 'Logging in...' : 'Login'} // Change button text based on loading state
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
        <p className="mt-2">Don&apos;t have an account
                    <Link 
                        className="font-medium text-blue-900 hover:underline ml-2"
                        to="/auth/register">
                    Register
                    </Link>
                </p>
        </div>
     );
}

export default AuthLogin;