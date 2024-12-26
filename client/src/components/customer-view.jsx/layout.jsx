import { Outlet } from "react-router-dom";
import CustomerHeader from "./header";

function CustomerLayout() {
    return ( 
        <div className="flex flex-col bg-white overflow-hidden">
            {/* common header */}
            <CustomerHeader />
            <main className="flex flex-col w-full">
                <Outlet />
            </main>
        </div>
     );
}

export default CustomerLayout;