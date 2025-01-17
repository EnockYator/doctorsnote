import { Button } from "@/components/ui/button";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RequestNote = () => {
  const [formData, setFormData] = useState(
    {
    fullName: "",
    email: "",
    facilityName: "",
    beginningDate: "",
    returnDate: "",
    reason: "",
    acceptTerms: false
  });
  const [checked, setChecked] = useState(true);

  const handleInputChange = (event) => {  
    // console.log(`Updating ${event.target.name}: ${event.target.value}`);  
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
    if(event.target.name === "acceptTerms") 
      {
        setChecked(!checked) 
        setFormData((prevData) => ({...prevData, [event.target.name]: checked}))
      } 
    
  
    setFormData((prevData) => ({
      ...prevData
    }))

  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend for processing
     console.log(formData);
  };
  return (
    <div className="w-full min-h-full flex flex-col">
      <div>
        <h1 className="text-lg font-bold text-center mb-4 tracking-tight text-blue-600">Request a Note</h1>
      </div>
      <div className="w-full flex flex-col  bg-white rounded-lg p-4 md:p-10 shadow-lg space-y-2">
        <p className="font-semibold text-gray-700 tracking-tighter mx-2">Please provide your details below to request for a new note.</p>
        {/* Form */}
        <form className="w-full max-w-md space-y-5 py-2">
          <div className="max-w-md flex flex-col justify-between space-y-2">
            <label htmlFor="fullName">Full Name:</label>
            <input 
            type="text" 
            name="fullName" 
            value={formData.fullName || ""}
            id="fullName" 
            placeholder="Enter your name" 
            className="border-[1.5px] border-blue-400 rounded-md px-2 py-[6px]"
            onChange={handleInputChange}
            required />
          </div>

          <div className="max-w-md flex flex-col justify-between space-y-2">
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            name="email" 
            value={formData.email || ""}
            id="email" 
            placeholder="Enter your email address" 
            className="border-[1.5px] border-blue-400 rounded-md px-2 py-[6px]"
            onChange={handleInputChange}
            required />
          </div>

          <div className="max-w-md flex flex-col justify-between space-y-2">
            <label htmlFor="facilityName">Name of health care facility:</label>
            <input 
            type="text" 
            name="facilityName" 
            value={formData.facilityName || ""}
            id="facilityName" 
            placeholder="Add name of the facilty you want to get the note from" 
            className="border-[1.5px] border-blue-400 rounded-md px-2 py-[6px]"
            onChange={handleInputChange}
            required />
          </div>

          <div className="max-w-md flex flex-col justify-between space-y-2">
            <label htmlFor="beginningDate">Beginning Date:</label>
            <input 
            type="date" 
            name="beginningDate" 
            value={formData.beginningDate || ""}  
            id="beginningDate"
            className="border-[1.5px] border-blue-400 rounded-md px-2 py-[6px]"
            onChange={handleInputChange}
            required />
          </div>

          <div className="max-w-md flex flex-col justify-between space-y-2">
            <label htmlFor="returnDate">Return Date:</label>
            <input 
            type="date" 
            name="returnDate" 
            value={formData.returnDate || ""}  
            id="returnDate"
            className="border-[1.5px] border-blue-400 rounded-md px-2 py-[6px]"
            onChange={handleInputChange}
            required />
          </div>

          <div className="max-w-md flex flex-col justify-between space-y-2">
            <label htmlFor="reason">Reason for requesting note:</label>
            <textarea
            name="reason" 
            value={formData.reason || ""}  
            id="reason" 
            placeholder="Add reason for requesting the note"  
            className="border-[1.5px] border-blue-400 rounded-md px-2 py-[6px] h-20 max-h-28"
            onChange={handleInputChange}
            required />
          </div>

          <div className="max-w-md flex justify-center space-x-2">
            <input 
            type="checkbox" 
            name="acceptTerms" 
            value={formData.acceptTerms || false}
            id="acceptTerms"
            onChange={handleInputChange}
            required />
            <p>I have read and accept the
              <Link to="/terms-of-service"
              className="text-blue-700 ml-1"
              >Terms Of Service</Link>
            </p>
          </div>

          <div>
            <Button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-900"
            onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default RequestNote;
