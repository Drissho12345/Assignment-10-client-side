import { Link } from "react-router-dom";

const AllSpotsCard = ({spots}) => {
    const data = spots
    console.log(data);
    const {Total,TravelTime,seasonality,price,text,url} = data;
    return (
        <div>
            <div className=" shadow-2xl  p-6 rounded-3xl">
                <div className="flex justify-center items-center">
                    <img className="w-full h-[300px]" src={url} alt="" />
                </div>
                <div className="md:h-[220px] pt-3">
                    <div>
                        <h2 className="font-bold text-xl">{text}</h2>
                    </div>
                    <p className="pt-1 font-bold text-gray-400">Total Visitors Per Year: {Total}</p>
                    <p className="pt-1 pb-2 font-bold text-gray-400">Travel Time: {TravelTime}</p>
                    <hr />
                    <p className="pt-1 pb-1 font-bold text-gray-400">Seasonality: {seasonality}</p>
                    <h3 className="text-gray-400 font-bold ">Average Cost: {price}</h3>
                    
                    <div className="mt-2">
                       <Link to={`/CardDetails/${spots._id}`}>
                           <button className="btn bg-orange-300">View Details</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSpotsCard;