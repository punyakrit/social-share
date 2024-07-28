const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-800 px-8 py-12 rounded-lg shadow-lg animate-pulse"
        >
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-gray-600 w-full h-full"></div>
            <div className="ml-4 flex-1">
              <div className="bg-gray-600 h-6 rounded w-24 mb-2"></div>
              <div className="bg-gray-600 h-4 rounded w-16"></div>
            </div>
          </div>
          <div className="bg-blue-700 h-8 rounded w-32"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
