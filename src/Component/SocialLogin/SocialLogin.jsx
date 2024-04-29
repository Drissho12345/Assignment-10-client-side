
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { AuthContext } from './../AuthProvider/AuthProvider';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
const SocialLogin = () => {
    const Navigate =useNavigate()
    const {googleLogin,githubLogin,setLoading} = useContext(AuthContext)
    
   
    const handleGoogleLogin =() =>{
        googleLogin()
        .then(result =>{
            console.log(result.user)
            
            setLoading(false)
            Navigate(location?.state ? location.state : '/');
            if(result.user){
                toast.success("Google Login successfully")
            }
            // Navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.error(error)
            toast.error("Google Login Failed")
        })
    }
    const handleGithubLogin =() =>{
        githubLogin()
        .then(result => {
            console.log(result.user);
            
            setLoading(false)
            Navigate(location?.state ? location.state : '/');
            if(result.user){
                toast.success("GitHub Login successfully")
            }
            // Navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error);
            toast.error("GitHub Login Failed")
        })
    }
    return (
        <div className="flex gap-2 item-center justify-center">
            <button onClick={()=>handleGoogleLogin()}  type="button" className="py-2 flex gap-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
            < FcGoogle className=" text-white rounded-full h-6 w-6" />
            Login with Google</button>

            <button onClick={()=>handleGithubLogin()} type="button" className="py-2 flex gap-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
            < SiGithub className="rounded-full h-6 w-6" />
            Login with Github</button>
        </div>
    );
};

export default SocialLogin;