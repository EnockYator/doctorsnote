/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const Home = () => {

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
        <div className="p-4 bg-gray-50 shadow rounded">
            <p className="text-gray-600 italic mb-2 text-sm">&quot;{feedback}&quot;</p>
            <h5 className="text-base font-bold text-gray-800">- {name}</h5>
        </div>
    );
    
    return (
        <>

        {/* Hero Section */}
        <main className="flex flex-1 flex-col items-center text-center py-12 bg-gradient-to-b from-blue-50 to-gray-50">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4 px-4">
                    Simplify Your Medical Notes
                </h2>
                <p className="text-gray-600 text-base max-w-3xl mb-8 px-4">
                    DoctorsNote empowers you to securely request and manage your medical notes, 
                    including sick leave certifications, signed digitally by certified doctors. 
                    Save time and focus on what matters most.
                </p>
                <div className="flex space-x-3">
                    <Link to="auth/login">
                        <Button className="h-9 px-2 text-sm">Get Started</Button>
                    </Link>
                    <Link to="/about">
                        <Button variant="outline" className="h-9 px-2 text-sm">Learn More</Button>
                    </Link>
                </div>
            </main>

            {/* Features Section */}
            <section className="py-12 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
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
                        <Feature
                            title="Reliable"
                            description="Certified doctors ensure authenticity for every medical note."
                            icon="✅"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
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
