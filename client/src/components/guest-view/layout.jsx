import { Outlet } from "react-router-dom";
import CommonFooter from "../common/footer";
import CommonHeader from "../common/header";

function GuestLayout() {
    return ( 
        
        <div className="flex flex-col bg-white w-full h-full">
            
            {/* common header */}
            <CommonHeader />
            <main className="flex flex-col w-full">
                <Outlet />
            </main>
            {/* common footer*/}
            <CommonFooter />
        </div>
     );
}

export default GuestLayout;