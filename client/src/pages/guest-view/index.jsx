/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MedicalTeamImage from "./../../assets/images/medical-team.jpg"
import MedicalBgImage from "./../../assets/images/med.jpg"
// import Loader from "@/components/common/Loader";
// import { useLoading } from "@/contexts/LoadingContext";
import SkeletonContainer from "@/components/common/SkeletonContainer";
import { useSkeleton } from "@/contexts/SkeletonContext";
import { useEffect } from "react";
// import style from "./../../../src/App.css";


const Home = () => {
    // const {loading, handleImageLoad} = useLoading();
    
    // if (loading) {
    //     return <Loader />;
    // }


    const { loadingSections, loadSection } = useSkeleton();
    useEffect(() => {
        // Simulating data loading
        console.log('Calling loadSection for main...');
        loadSection('main', true);
        console.log(`SkeletonContext values in Home:`, loadingSections);


        const timer2 = setTimeout(() =>{
            loadSection('main', false);
        }, 5000);

        return () => {
            clearTimeout(timer2)
        }
    }, [loadSection]);


    const Feature = ({ title, description, icon }) => (
        <div className="flex items-start space-x-4">
            <div className="text-lg">{icon}</div>
            <div>
                <h4 className="text-base font-bold text-gray-800">{title}</h4>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
    
    const Testimonial = ({ name, feedback }) => (
        <div className="p-4 bg-gray-100 shadow-md rounded">
            <p className="text-gray-600 italic mb-2 text-sm">&quot;{feedback}&quot;</p>
            <h5 className="text-base font-bold text-gray-800">- {name}</h5>
        </div>
    );
    
    return (
        <>

        {/* Hero Section */}
        {/* <SkeletonContainer section="main" className="h-72 w-screen"> */}
        <main
            className="relative mt-[52px] flex flex-1 flex-col items-center text-center pt-12 w-screen"
            style={{
            backgroundImage: `url(${MedicalBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-transparent opacity-60 z-0"></div>
        {/* Content */}
            <div className="relative  max-w-4xl px-6 pt-1 md:my-12 pb-6">
                <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
                    Trusted Digital Medical Notes
                </h2>
                <p className="text-white text-base md:text-xl mb-8 px-4 drop-shadow-sm">
                    Seamlessly request and manage your medical certifications with ease.  
                    Designed for security, speed, and accuracy.
                </p>
                <p className="text-gray-200 text-base max-w-3xl mb-8 px-4 hidden md:block drop-shadow-sm">
                    DoctorsNote empowers you to securely request and manage your medical notes,  
                    including sick leave certifications, signed digitally by certified doctors.  
                    Saves time and focus on what matters most.
                </p>
                <div className="flex justify-center space-x-3">
                    <Link to="auth/register">
                        <Button className="h-10 px-4 text-sm bg-white text-blue-800 shadow-md hover:shadow-lg hover:text-white">
                            Get Started
                        </Button>
                    </Link>
                    <Link to="/about">
                    <Button className="h-10 px-4 text-sm bg-white text-blue-800 shadow-md hover:shadow-lg hover:text-white">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        
            {/* Decorative Image Section */}
            <SkeletonContainer section="main" className=''>
            <div className="relative z-10 md:w-3/4">
                <img
                    src={MedicalTeamImage}
                    alt="Medical Team"
                    className="shadow-lg md:rounded-lg max-h-[400px] object-cover mx-auto"
                    // onLoad={handleImageLoad}
                />
            </div>
            </SkeletonContainer>
        </main>
        {/* </SkeletonContainer> */}



        


            {/* Features Section */}
            <section className="py-12 bg-gray-100 md:mt-6">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-8">
                        Why Choose DoctorsNote?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Feature
                            title="Certified Doctors"
                            description="Work with licensed and trusted medical professionals."
                            icon="🩺"
                        />
                        <Feature
                            title="Digital Signatures"
                            description="Notes are digitally signed to ensure authenticity."
                            icon="✍️"
                        />
                        <Feature
                            title="Seamless Requests"
                            description="Request medical notes anytime, anywhere."
                            icon="🌐"
                        />
                        <Feature
                            title="Secure"
                            description="All your data is encrypted and handled with strict privacy standards."
                            icon="🔒"
                        />
                        <Feature
                            title="Fast"
                            description="Get your medical notes quickly and without unnecessary delays."
                            icon="⚡"
                        />
                        
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
                        What Our Users Say
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Testimonial
                            name="Enock Y"
                            feedback="DoctorsNote made getting my sick leave note so easy. Highly recommend!"
                        />
                        <Testimonial
                            name="Paul Andrew"
                            feedback="The secure platform and quick response time are unbeatable."
                        />
                        <Testimonial
                            name="Peter Anderson"
                            feedback="As a doctor, I appreciate the streamlined process to issue notes."
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 px-2 bg-blue-600 text-white text-center w-full">
                <h3 className="text-2xl font-bold mb-4">
                    Ready to Get Started?
                </h3>
                <p className="text-base mb-6">
                    Sign up today and experience the convenience of DoctorsNote.
                </p>
                <Link to="auth/register">
                    <Button className="bg-white text-blue-600 hover:bg-gray-200">
                        Register Now
                    </Button>
                </Link>
            </section>


        </>

            
    );
};

export default Home;
