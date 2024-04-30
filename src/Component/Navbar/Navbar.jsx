
import { useContext, useEffect, useState } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const [theme,setTheme] = useState('light')
    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localTheme =localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
    const handleToggle = e =>{
        console.log(e.target.value);
        if(e.target.checked){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    console.log(theme);
    const links = <>
      <li className="text-[18px] text-[#23BE0A]"><NavLink to="">Home</NavLink></li>
      <li className="text-[18px] text-[#23BE0A]"><NavLink to="/AllTouristsSpot">All Tourists Spot</NavLink></li>
      <li className="text-[18px] text-[#23BE0A]"><NavLink to="/AddTouristsSpot">Add Tourists Spot</NavLink></li>
     {
       user && <li className="text-[18px] text-[#23BE0A]"><NavLink to="/MyList">My List</NavLink></li>
     }
    </>
    
    // console.log(user);
    return (
        <div className="navbar  shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <div data-tooltip-id="tooltip-anchor-show" data-tooltip-place="right" data-tooltip-delay-hide={100} data-tooltip-content="Southeast Asia">
                   <img className=" rounded-full h-10 w-[40px]  md:h-14  md:w-[60px]" src="https://f7c7358c.rocketcdn.me/wp-content/uploads/2022/01/cropped-SOUTHEAST-ASIA_ICON_DARK_ORANGE.png" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a className="text-[18px] text-[#23BE0A]">{links}</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to={"/Login"}>
                    {user ? <div className="flex gap-1 md:gap-3">
                    <div data-tooltip-id="tooltip-anchor-show" data-tooltip-place="left" data-tooltip-content={user.displayName} data-tooltip-delay-hide={100}>
                        <img className="border rounded-full md:w-[45px] h-7 w-12 md:h-[45px]" src={user.photoURL} />
                    </div>
                    <button onClick={ () => logOut()} className="bg-orange-300 pl-1 pr-1 text-[10px] md:text-[12px] w-20 rounded-lg border md:w-20">Log Out</button>
                    </div> : 
                    <a className="md:btn text-[12px] px-2 rounded py-1 text-black bg-[#23BE0A]">Login</a>}
                   
                </Link>
                <div>
                <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox" onChange={handleToggle}  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                </div>
            </div>
            <Tooltip id="tooltip-anchor-show"></Tooltip>
        </div>
    );
};

export default Navbar;