// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from "react-router-dom";
import { useEffect } from 'react';
const Card = ({spots,}) => {
    const data = spots;
    console.log(data);
    const {description ,name,text,url} = data;
    // animation
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
    return (
        <div>
            <div className=" shadow-2xl bg-white text-black  p-6 rounded-3xl" data-aos="zoom-in-down">
                <div className="flex justify-center items-center">
                    <img className="w-full h-[300px]" src={url} alt="" />
                </div>
                <div className="md:h-[220px] pt-3">
                    <div>
                        <h2 className="font-bold text-xl">{text}</h2>
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