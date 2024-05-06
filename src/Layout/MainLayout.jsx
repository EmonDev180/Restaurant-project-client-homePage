import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/Navber/Navber";


const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;