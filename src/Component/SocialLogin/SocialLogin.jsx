
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { AuthContext } from './../AuthProvider/AuthProvider';
import { toast } from "react-toastify";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
const SocialLogin = () => {
    const {googleLogin,} = useContext(AuthContext)
    
    const githubProvider = new GithubAuthProvider();
    const handleGoogleLogin =() =>{
        googleLogin()
        .then(result =>{
            console.log(result.user)
            if(result.user){
                toast.success("Google Login successfully")
            }
        })
        .catch(error =>{
            console.error(error)
            toast.error("Google Login Failed")
        })
    }
    const handleGithubLogin =() =>{
        signInWithPopup(auth,githubProvider)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="flex gap-2 item-center justify-center">
            <button onClick={handleGoogleLogin}  type="button" className="py-2 flex gap-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
            < FcGoogle className=" text-white rounded-full h-6 w-6" />
            Login with Google</button>

            <button onSubmit={handleGithubLogin} type="button" className="py-2 flex gap-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
            < SiGithub className="rounded-full h-6 w-6" />
            Login with Github</button>
        </div>
    );
};

export default SocialLogin;