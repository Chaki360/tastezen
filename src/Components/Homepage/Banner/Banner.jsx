
const Banner = () => {
    return (
        <div
            className="w-full bg-center bg-cover lg:h-[38rem]"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1499125650409-2c437d5cca77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')`,
            }}
        >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/60 lg:bg-gray-900/40">
                <div className="text-center">
                    <h1 className="text-2xl lg:text-4xl font-semibold text-white">
                        Creating Memories <span className="text-lime-400">One Dish</span> at a Time
                    </h1>
                    <p className="mt-3 lg:mt-5 text-white text-center mx-4 lg:mx-10 text-sm lg:text-lg">
                        Creating Memories, One Dish at a Time is not just about food; its a journey through flavors that linger in your heart. Every meal is an opportunity to craft cherished moments, shared with loved ones, and etched into the tapestry of life. From the sizzle of the pan to the first delicious bite, each dish is a story waiting to be told. Join us as we embark on a culinary adventure where the art of cooking weaves unforgettable memories, one recipe at a time.
                    </p>
                    <button className="px-3 py-2 mt-3 text-sm lg:text-base font-medium text-white capitalize transition-colors duration-300 transform bg-lime-600 rounded-md lg:px-4 lg:py-2 lg:mt-3 hover:bg-lime-700">
                        Choose Recipe
                    </button>

                </div>
            </div>
        </div>

    );
};

export default Banner;