
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MedicalTeamImage from "./../../assets/images/medical-team.jpg"
import SecureImage from "./../../assets/images/secure.jpg"
import EasyImage from "./../../assets/images/easy.jpg"
// import Loader from "@/components/common/Loader";
// import { useLoading } from "@/contexts/LoadingContext";


function About() {
    // const {loading, handleImageLoad} = useLoading();
    
    // if (loading) {
    //     return <Loader />;
    // }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 mt-[52px]">
            {/* Hero Section */}
            <div className="relative bg-blue-900 text-white pt-16 pb-6 px-6 text-center flex flex-col items-center">
                <h1 className="text-2xl font-bold md:text-5xl">
                    About DoctorsNote
                </h1>
                <p className="my-4 text-lg md:text-xl max-w-3xl mx-auto">
                    Your trusted digital platform for seamless, secure, and reliable medical certifications.
                </p>
                
                <img
                    src={MedicalTeamImage /* TeamImage */}
                    alt="Medical Team"
                    className="w-11/12 md:w-1/2 object-cover rounded-lg shadow-lg mx-auto"
                    // onLoad={handleImageLoad}
                />
            </div>

            {/* Our Mission */}
            <div className="py-12 px-6 text-center bg-white">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    We aim to simplify how medical notes are requested, provided, and managed.
                    We combine technology with trust to deliver a seamless experience for patients, doctors, and administrators.
                </p>
            </div>

            {/* Features Section */}
            <div className="py-10 px-6 grid gap-8 md:grid-cols-3 bg-blue-50">
                <div className="text-center">
                    <img
                        src={SecureImage /*SecureImage*/}
                        alt="Secure Platform"
                        className="w-3/4 max-w-56 max-h-44 mx-auto mb-4 rounded-lg shadow-md object-cover"
                    />
                    <h3 className="text-xl md:2xl font-bold text-gray-800">Secure Platform</h3>
                    <p className="text-gray-600 mt-2">
                        We prioritize data privacy and security, ensuring that all medical notes are encrypted and protected.
                    </p>
                </div>
                <div className="text-center">
                    <img
                        src={EasyImage /* EasyImage*/} 
                        alt="Ease of Use"
                        className="w-3/4 max-w-56 max-h-44 object-cover mx-auto mb-4 rounded-lg shadow-md"
                    />
                    <h3 className="text-xl md:2xl font-bold text-gray-800">Ease of Use</h3>
                    <p className="text-gray-600 mt-2">
                        A user-friendly interface for patients, doctors, and administrators to streamline the entire process.
                    </p>
                </div>
                <div className="text-center">
                    <img
                        src={MedicalTeamImage/*TeamImage*/}
                        alt="Trusted Professionals"
                        className="w-3/4 max-w-56 max-h-44 object-cover mx-auto mb-4 rounded-lg shadow-md"
                    />
                    <h3 className="text-xl md:2xl font-bold text-gray-800">Trusted Professionals</h3>
                    <p className="text-gray-600 mt-2">
                        Certified doctors digitally sign all medical notes, ensuring authenticity and trust.
                    </p>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-10 px-6 bg-white">
                <h2 className="text-xl md:text-3xl font-bold text-blue-700 text-center mb-10">What Our Users Say</h2>
                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        <p className="text-gray-600">
                        &quot;DoctorsNote has completely transformed how I request medical notes. It&apos;s fast, reliable, and
                            the customer support is outstanding!&quot;
                        </p>
                        <h3 className="mt-4 font-bold text-gray-800">- Sarah K., Patient</h3>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        <p className="text-gray-600">
                        &quot;As a doctor, the platform allows me to serve my patients more efficiently while ensuring
                            that all certifications are secure and verifiable.&quot;
                        </p>
                        <h3 className="mt-4 font-bold text-gray-800">- Dr. James O., Physician</h3>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-10 px-6 bg-blue-600 text-white text-center">
                <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-base md:text-lg max-w-xl mx-auto mb-8">
                    Join the thousands of users who trust DoctorsNote for their medical certifications. 
                    It&apos;s quick, secure, and effortless.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link to="/auth/register">
                        <Button className="h-10 px-6 bg-white text-blue-600 rounded font-bold">
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/auth/register">
                        <Button className="h-10 px-6 bg-white text-blue-600 rounded font-bold">
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;
