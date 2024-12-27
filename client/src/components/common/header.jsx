import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";


function CommonHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleOutsideClick(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return ( 
        <header className="flex w-full bg-blue-600 text-white py-3 px-2 shadow items-center">
            <div className="flex justify-between w-full">
                <h1 className="text-xl md:text-2xl font-bold">DoctorsNote</h1>
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        // Close Icon
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Three Bars Icon
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden max-w-7xl mx-auto mt-2 md:flex justify-between items-center px-6">
                <nav className="md:flex">
                    <Link to="/">
                        <Button variant="secondary" className="mr-3 h-8 px-3">Home</Button>
                    </Link>
                    <Link to="/about">
                        <Button variant="secondary" className="mr-3 h-8 px-3">About</Button>
                    </Link>
                    <Link to="/auth/login">
                        <Button variant="secondary" className="mr-3 h-8 px-3">Login</Button>
                    </Link>
                    <Link to="/auth/register">
                        <Button variant="secondary" className="h-8 px-2">Sign Up</Button>
                    </Link>
                </nav>
            </div>

            {/* Mobile Full-Screen Overlay */}
            {menuOpen && (
                <div 
                    ref={menuRef}
                    className="md:hidden fixed inset-0 bg-blue-600 bg-opacity-95 flex flex-col items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 text-white focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <nav className="text-center space-y-4">
                        <Link 
                            to="/" 
                            className="block text-white text-xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/auth/login" 
                            className="block text-white text-xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            Login
                        </Link>
                        <Link 
                            to="/auth/register" 
                                className="block text-white text-xl"
                                onClick={() => setMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                        <Link 
                            to="/about"
                            className="block text-white text-xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                    </nav>
                </div>
            )}
        </header>

     );
}

export default CommonHeader;