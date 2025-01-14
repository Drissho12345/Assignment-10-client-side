// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSpotsCard from "../AllSpotsCard/AllSpotsCard";
import { Helmet } from "react-helmet";

const AllTouristsSpot = () => {
    const spots = useLoaderData()
    console.log(spots);
    return (
        <div>
            <Helmet>
                <title>All Tourists Spot Page</title>
            </Helmet>
            <div className=" mt-5">
                <select className="select select-bordered ">
                    <option>All Spots</option>
                    <option>High Cost Spot</option>
                    <option>Low Cost Spot</option>
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