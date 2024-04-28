
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import GuidesSection from "../GuidesSection/GuidesSection";
import PopularTours from "../PopularTours/PopularTours";
import Card from "../Card/Card";
const Cards = () => {
    const spots = useLoaderData();
    // console.log(spots );
    return (
        <div>
            <Banner></Banner>
            <div className="text-center mt-16 mb-10">
                <h1 className="font-bold mb-6 text-4xl">All Southeast Asia Tourist Spots</h1>
                <p>A tourist spot, also referred to as a tourist attraction or destination, is a discernible  geographical <br /> location or site that has been intentionally developed or preserved for the purpose of attracting and accommodating tourists.</p>
            </div>
            <div className="mb-16 mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-around">
                {
                    spots.map(spots => <Card key={spots._id} spots={spots}></Card>)
                }
            </div>
            <PopularTours></PopularTours>
            <GuidesSection></GuidesSection>
        </div>
    );
};

export default Cards;