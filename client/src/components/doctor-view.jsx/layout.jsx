import { Outlet } from "react-router-dom";
import DoctorHeader from "./header";

function DoctorLayout() {
    return ( 
        <div className="flex flex-col bg-white overflow-hidden">
            {/* common header */}
            <DoctorHeader />
            <main className="flex flex-col w-full">
                <Outlet />
            </main>
        </div>
     );
}

export default DoctorLayout;