import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const CardDetails = () => {
    const [item,setItem] = useState({})
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        fetch(`http://localhost:5000/singleCard/${id}`)
        .then(res =>res.json())
        .then(data =>{
            setItem(data)
        })
    },[id])
    const {description,Location,Total,seasonality,TravelTime,name,text,url,price,} = item
    // console.log(item);
    return (
        <div>
            <div className="grid p-5 md:gap-10 gap-5 shadow bg-slate-100 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
                <div>
                   <img className=" md:w-full h-96" src={url} alt="" />
                </div>
                <div>
                        <div>
                            <h2 className="font-bold text-4xl">{text}</h2>
                            <h3 className="text-gray-400 text-xl font-bold ">Country Name: {name}</h3>
                            <p className="pt-1 text-gray-400 font-bold text-[20px]">Location: {Location}</p>
                            <p className="pt-1 text-gray-400 font-bold text-[20px]">Total Visitors Per Year: {Total}</p>
                            <p className="pt-1 text-gray-400  font-bold text-[20px]">Seasonality: {seasonality}</p>
                            <p className="pt-1 text-gray-400  font-bold text-[20px]">Travel Time: {TravelTime}</p>
                            <p className="pt-1 text-gray-400 font-bold text-[20px]">Average Cost: {price}</p>
                            <p className="pt-1 text-gray-400 font-bold text-[20px]">{description}</p>
                        </div>
                        <div className="mt-3">
                          <Link to={"/"}>
                            <button className="btn bg-orange-300">Go Back Home Page</button>
                           </Link>
                        </div>
                </div>
           </div>
    </div>
    );
};

export default CardDetails;