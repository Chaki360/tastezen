/* eslint-disable react/prop-types */
import ChefsDetails from "./ChefsDetails/ChefsDetails";


const Chefs = ({ chefs }) => {



    return (
        <div>
            <h1 className="text-4xl font-bold mt-16 mb-16 text-center">Our kitchen maestros</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                {chefs?.map((chef) => (
                    <ChefsDetails key={chef.id} chef={chef}></ChefsDetails>
                ))}
            </div>
        </div>

    );
};

export default Chefs;