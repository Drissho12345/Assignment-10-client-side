
// import { useContext } from "react";
import {  NavLink } from "react-router-dom";
// import { AuthContext } from "../Auth/AuthProvider";

const Navbar = () => {
    const links = <>
      <li className="text-[18px] text-[#23BE0A]"><NavLink to="">Home</NavLink></li>
      <li className="text-[18px] text-[#23BE0A]"><NavLink to="/AllTouristsSpot">All Tourists Spot</NavLink></li>
      <li className="text-[18px] text-[#23BE0A]"><NavLink to="/AddTouristsSpot">Add Tourists Spot</NavLink></li>
      <li className="text-[18px] text-[#23BE0A]"><NavLink to="/MyList">My List</NavLink></li>
    </>

    // const {user,logOut} = useContext(AuthContext)
    return (
        <div className="navbar  bg-orange-200 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <div className="tooltip tooltip-right" data-tip="Southeast Asia">
                   <img className=" rounded-full h-10 w-[40px]  md:h-14  md:w-[60px]" src="https://f7c7358c.rocketcdn.me/wp-content/uploads/2022/01/cropped-SOUTHEAST-ASIA_ICON_DARK_ORANGE.png" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a className="text-[18px] text-[#23BE0A]">{links}</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* <Link to={"/Login"}>
                    {user ? <div className="flex gap-3">
                    <div className="tooltip" data-tip={user.displayName}>
                        <img className="border rounded-full w-[45px] h-[45px]" src={user.photoURL} />
                    </div>
                    <button onClick={ () => logOut()} className="btn btn-secondary">Log Out</button>
                    </div> : 
                    <a className="md:btn text-[12px] px-2 rounded py-1 text-[#fff] bg-[#23BE0A]">Login</a>}
                   
                </Link> */}
            </div>
        </div>
    );
};

export default Navbar;