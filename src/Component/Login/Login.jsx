import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [ showPassword ,setShowPassword] = useState(false)
    const {loginUser} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(password.length < 6){
            toast.error('Password should be at least 6 characters or longer')
            return;
        }
        
        // console.log(email,password);
        loginUser(email,password)
        .then(register =>{
            // Navigate(location?.state ? location.state : '/');
            console.log(register.user);
            toast.success("User Login Successfully")
        })
        .catch(error =>{
            console.error(error)
            toast.error("No account here. Please Register")
        })
    }


    return (
        <div>
            <div  className="lg:pl-[300px]">
                <form onSubmit={handleLogin} className=" lg:w-[600px] p-5 bg-gray-300">
                    <div className="mb-6">
                        <h1 className="text-6xl font-bold text-center mb-4">Login</h1>
                        <h3 className="font-bold">Email:</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="email" name="email" className="grow" placeholder="Email" required/>
                        </label>
                    </div>
                    <div className="mb-10">
                        <div >
                            <h3 className="font-bold">Password:</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type={ showPassword ? "text" : "password" } name="password" placeholder="password" required/>
                                <span className="ml-48 md:ml-[590px] lg:ml-[500px] text-xl absolute " onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FiEye></FiEye> : <FiEyeOff></FiEyeOff> 
                                    }
                                </span>
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-center pt-3 text-[16px] font-bold cursor-pointer">Forget Password</p>
                            <h1 className="text-center pt-3 text-[16px]">Don't have an account?<Link to={"/Register"}> <u className="font-bold">Register</u></Link></h1>
                        </div>
                    </div>
                    <button className="btn mb-7 text-[20px] bg-emerald-400 w-full">Login</button>
                    <div className="flex gap-4 justify-center">
                        <hr className="w-2/3 mt-4"/>
                        <h3 className="text-xl font-bold">OR</h3>
                        <hr className="w-2/3 mt-4"/>
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;