/* eslint-disable react/prop-types */
import ChefsDetails from "./ChefsDetails/ChefsDetails";


const Chefs = ({ chefs }) => {



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 m-6">
            {chefs?.map((chef) => (
                <ChefsDetails key={chef.id} chef={chef}></ChefsDetails>
            ))}
        </div>

    );
};

export default Chefs;