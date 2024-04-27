import { LuFacebook } from "react-icons/lu";
import { FaCameraRetro } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
const Card = ({spots}) => {
    const data = spots;
    console.log(data);
    const {description ,name,text,url} = data;
    return (
        <div>
            <div className=" shadow-2xl  p-6 rounded-3xl">
                <div className="flex justify-center items-center">
                    <img className="w-full h-[300px]" src={url} alt="" />
                </div>
                <div className="md:h-[220px] pt-3">
                    <div className="flex  justify-between gap-16">
                        <div>
                            <h2 className="font-bold text-xl">{text}</h2>
                            
                        </div>
                        <div className="flex text-xl gap-4">
                            <LuFacebook className="cursor-pointer"/>
                            <FaCameraRetro className="cursor-pointer"/>
                            <FiTwitter className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="pb-3">
                       <h3 className="text-gray-400 font-bold "><span>Country: </span>{name}</h3>
                    </div>
                    <hr />
                    <p className="pt-2">{description}</p>
                    <div className="mt-3">
                       <Link to={`/CardDetails/${spots._id}`}>
                           <button className="btn bg-orange-300">View Details</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;