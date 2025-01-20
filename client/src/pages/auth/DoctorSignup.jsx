import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { registerDoctorStepThreeFormControls, registerDoctorStepTwoFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { registerDoctor} from "@/store/auth-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function DoctorSignUp() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({}); // State for error tracking in input fields
  const [formData, setFormData] = useState({
    fuserName: "",
    gender: "",
    country: "",
    city: "",
    specialization: "",
    institution: "",
    certificate: null,
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) =>
        setCountries(data.map((country) => country.name.common).sort())
      )
      .catch(() =>
        toast({
          title: "Error",
          description: "Failed to load countries.",
          className: "bg-toastError text-white max-w-md h-16 z-50",
        })
      );
  }, [toast]);

  // Fetch cities when a country is selected
  useEffect(() => {
    if (formData.country) {
      setIsLoading(true);
      fetch(`https://countriesnow.space/api/v0.1/countries/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country: formData.country }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCities(data.data || []);
          setIsLoading(false);
        })
        .catch(() => {
          setCities([]);
          setIsLoading(false);
          toast({
            title: "Error",
            description: "Failed to load cities for the selected country.",
            className: "bg-toastError text-white max-w-md h-16 z-50",
          });
        });
    }
  }, [formData.country, toast]);


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


  // submit on third step
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
      setIsLoading(true); // Set loading to true when submitting


      // Add the `role` field to the formData
      const doctorFormData = { ...formData, role: "doctor" };
      console.log(doctorFormData);

      const result = await dispatch(registerDoctor(doctorFormData)).unwrap();
      toast({
        title: "Success",
        description: result.message, // Message from backend registeDoctor endpoint
        className: "bg-toastSuccess  text-white max-w-md h-16 z-50",
        duration: 3000,
      });
      // Redirect to login page
      navigate("/auth/login");
    } catch (error) {
      toast({
        title: "Failed",
        description: error.message || "An unexpected error occurred.",
        className: "bg-toastError  text-white max-w-md h-16 z-50",
        duration: 3000,
      });
    } finally {
      setIsLoading(false); // Set loading to false after request completion
    }
  }


  // form step 2
  const handleStep2InputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = "Full Name is required";
    }
  
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
  
    if (!formData.country) {
      newErrors.country = "Country is required";
    }
  
    if (!formData.city) {
      newErrors.city = "City is required";
    }
  
    setErrors(newErrors);
  
    
  };


  // Form step content
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="relative mx-auto w-full max-w-md space-y-4 md:space-y-6 z-0">
            <h2 className="text-xl md:text-3xl text-center text-blue-700 font-bold tracking-tight">
              Personal Details
            </h2>

            <div className="flex-col space-y-4">
            
              {/* User Name */}
            <div className="flex-col space-y-2">
            <label htmlFor="userName" className="text-gray-700 tracking-tight text-base">Full Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleStep2InputChange}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              placeholder="Enter your name"
            />
            {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}  
            </div>

            {/* Gender */}
            <div className="flex-col space-y-2">
            <label htmlFor="gender" className="text-gray-700 tracking-tight text-base">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleStep2InputChange}
              required
              className="w-full border bg-white border-gray-300 rounded-lg p-2 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="preferNotToSay">Prefer not to say</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.userName}</p>}
            </div>

            {/* Country */}
            <div className="flex-col space-y-2">
            <label htmlFor="country" className="text-gray-700 tracking-tight text-base">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleStep2InputChange}
              required
              className="w-full border bg-white border-gray-300 rounded-lg p-2 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>
                Select Country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            </div>

            {/* City */}
            <div className="flex-col space-y-2">
            <label htmlFor="city" className="text-gray-700 tracking-tight text-base">City</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              required
              onChange={handleStep2InputChange}
              className="w-full border bg-white border-gray-300 rounded-lg p-2 shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>
                Select City
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            </div>
            </div>

            <Button 
            onClick={handleSubmit}
            className="btn-secondary w-full"
            >
              {isLoading ? "Loading..." : "Next"}
            </Button>



            {/* <CommonForm
              formControls={[
                { name: "userName", label: "Full Name", componentType: "input", placeholder: "Enter Your Full Name" },
                { name: "gender", label: "Gender", componentType: "select", options: [
                    { id: "male", label: "Male" },
                    { id: "female", label: "Female" },
                    { id: "prefer_not_to_say", label: "Prefer not to say" },
                  ], placeholder: "Select Gender" },
                { name: "country", label: "Country", componentType: "select", options: countries.map(country => ({
                    id: country, label: country
                  })), placeholder: "Select Country" },
                { name: "city", label: "City", componentType: "select", options: cities.map(city => ({
                    id: city, label: city
                  })), placeholder: "Select City",},
              ]}
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              buttonText={isLoading ? "Loading..." : "Next"}
            /> */}
          </div>
        );
      case 2:
        return (
          <div className="mx-auto w-full max-w-md space-y-4">
            <div className="text-center">
              <h1 className="text-xl md:text-3xl text-blue-700 font-bold tracking-tight">Professional Details</h1>
            </div>
            <CommonForm
              formControls={registerDoctorStepTwoFormControls}
              buttonText={isLoading ? 'Loading...' : 'Next'} // Change button text based on loading state
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
            />
          </div>
        );
      case 3:
        return (
          <div className="mx-auto w-full max-w-md space-y-4">
            <div className="text-center">
              <h1 className="text-xl md:text-3xl text-blue-700 font-bold tracking-tight">Account Details</h1>
            </div>
            <CommonForm
              formControls={registerDoctorStepThreeFormControls}
              buttonText={isLoading ? 'Signing Up...' : 'Sign Up'} // Change button text based on loading state
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
          </div>
        );
      default:
        return null;
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className="mx-auto mt-[10px] md:mt-[40px] w-full max-w-md space-y-5">
      {/* Progress Bar */}
      <div className="flex justify-center items-center space-x-8 md:space-x-20">
  {[1, 2, 3].map((number) => (
    <div key={number} className="flex items-center">
      {/* Dot */}
      <div
        className={`h-4 w-4 md:h-4 md:w-4 rounded-full ${
          step >= number ? "bg-green-500" : "bg-gray-500"
        }`}
      />
      {/* Line */}
      {number < 3 && (
        <div
          className={`h-0.5 flex-1 ${
            step >= number + 1 ? "bg-green-500" : "bg-gray-300"
          }`}
        />
      )}
    </div>
  ))}
</div>

      {/* Step Content */}
      {renderStepContent()}

      {/* Navigation */}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <Button
            onClick={() => setStep(step - 1)}
            className="btn-secondary bg-green-600 hover:bg-green-900"
          >
            Back
          </Button>
        )}
        
      </div>
    </div>
  );
}

export default DoctorSignUp;
