/* eslint-disable react/prop-types */


const ChefsDetails = ({ chef }) => {

    const { id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;

    return (
        <div className="w-96 max-w-md mx-auto rounded overflow-hidden shadow-lg">
            <img src={chef_picture} alt={chef_name} className="w-full h-60 mx-auto shadow-lg rounded-t-lg object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{chef_name}</div>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Years of Experience:</span> <span className="">{years_of_experience}</span>
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Number of Recipes:</span> <span className="">{number_of_recipes}</span>
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-bold">Likes:</span> <span className="">{likes}</span>
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded transform transition-transform hover:scale-110">
                    View Recipes
                </button>
            </div>
        </div>


    );
};

export default ChefsDetails;