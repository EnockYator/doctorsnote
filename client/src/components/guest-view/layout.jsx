import { Outlet } from "react-router-dom";
import CommonFooter from "../common/footer";
import CommonHeader from "../common/header";
import { LoadingProvider } from "@/contexts/LoadingContext";

function GuestLayout() {
    return ( 
        
        <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
            {/* common header */}
            <CommonHeader />
            <LoadingProvider>
                <Outlet />
            </LoadingProvider>
            
            {/* common footer*/}
            <CommonFooter />
        </div>
     );
}

export default GuestLayout;