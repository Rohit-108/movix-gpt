




const ShimmerMovieCard = () => {
    return (
        <div className="w-48 pr-4 animate-pulse">
            <div className="w-full h-72 bg-gray-800 rounded-md"></div>
        </div>
    );
};


const ShimmerList = () => {
    return (
        <div className="flex overflow-x-scroll p-6">
            {Array(10).fill(null).map((_, i) => (
                <ShimmerMovieCard key={i} />
            ))}
        </div>
    );
};

export default ShimmerList;