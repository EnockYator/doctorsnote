import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";


function CommonHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    return ( 
        <header className="flex flex-col w-full bg-blue-600 text-white py-3 shadow">
            <div>
                <div>
                    <h1 className="text-xl font-bold px-1">DoctorsNote</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-2 flex justify-between items-center px-6">
                <nav>
                    <Link to="/auth/login">
                        <Button className="mr-3 h-8 px-3">Login</Button>
                    </Link>
                    <Link to="/auth/register">
                        <Button variant="secondary" className="h-8 px-2">Sign Up</Button>
                    </Link>
                </nav>
            </div>
        </header>
     );
}

export default CommonHeader;