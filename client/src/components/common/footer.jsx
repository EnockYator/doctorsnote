

function CommonFooter() {
    return ( 
        <footer className="w-full bg-gray-800 text-white py-4 items-center text-center px-6">
            <div className="max-w-7xl mx-auto text-center">
                &copy; {new Date().getFullYear()} DoctorsNote. All rights reserved.
            </div>
        </footer>
     );
}

export default CommonFooter;