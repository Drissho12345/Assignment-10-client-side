// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSpotsCard from "../AllSpotsCard/AllSpotsCard";

const AllTouristsSpot = () => {
    const spots = useLoaderData()
    console.log(spots);
    return (
        <div>
            <div className=" mt-5">
                <select className="select select-bordered ">
                    <option disabled selected>Short By</option>
                    <option>High Cost</option>
                    <option>Low Cost</option>
                </select>
            </div>
            <div  className="mb-16 mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-around">
                {
                    spots.map(spots => <AllSpotsCard key={spots._id} spots={spots}></AllSpotsCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;