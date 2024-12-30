

function Loader() {
    return ( 
        <div className=" w-screen flex justify-center items-center h-screen bg-gray-100">
            <div className="flex space-x-2">
                <div className="w-[7px] bg-blue-500 animate-bounce h-3 origin-bottom delay-0 rounded-sm"></div>
                <div className="w-[7px] bg-blue-500 animate-bounce h-5 origin-bottom delay-75 rounded-sm"></div>
                <div className="w-[7px] bg-blue-500 animate-bounce h-5 origin-bottom delay-75 rounded-sm"></div>
                <div className="w-[7px] bg-blue-500 animate-bounce h-3 origin-bottom delay-0 rounded-sm"></div>
            </div>
        </div>
     );
}

export default Loader;