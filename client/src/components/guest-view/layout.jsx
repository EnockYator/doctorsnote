import { Outlet } from "react-router-dom";
import CommonFooter from "../common/footer";
import CommonHeader from "../common/header";

function GuestLayout() {
    return ( 
        
        <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
            {/* common header */}
            <CommonHeader />
            <Outlet />
            {/* common footer*/}
            <CommonFooter />
        </div>
     );
}

export default GuestLayout;