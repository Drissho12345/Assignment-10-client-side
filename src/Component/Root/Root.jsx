import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Root = () => {
    return (
        <div>
            <Helmet><title>Southeast Asia Tourist Spots </title></Helmet>
            <div className="w-[90%] m-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;