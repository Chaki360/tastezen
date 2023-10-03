import { useLoaderData } from "react-router-dom";
import Chefs from "../Chefs/Chefs";
import Banner from "./Banner/Banner";




const Homepage = () => {

    const chefs = useLoaderData();
    return (
        <div className="mt-16">
            <Banner />
            <div className="mt-16">
                <Chefs chefs={chefs} />
            </div>
        </div>
    );
};

export default Homepage;



