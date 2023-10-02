

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen sm:px-4 md:px-8 lg:px-16 xl:px-32">
            <img
                src="https://static.vecteezy.com/system/resources/previews/020/906/300/original/sad-emoji-file-download-free-png.png"
                alt="Page Not Found"
                className="w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-4"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center">
                Page Not Found
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">
                The page you are looking for does not exist.
            </p>
        </div>

    );
};

export default NotFound;