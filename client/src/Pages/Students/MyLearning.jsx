import Course from "./Course";

export const MyLearning = () => {
   const isloading = false;
   const myLearning = [1,2];
   return (
    <div className="max-w-4xl mx-auto my-10 px-4 md:px-0 px-6 py-6">
        <h1 className="text-3xl font-bold mb-10 text-center">My Learning</h1>
        <div className="my-5"></div>
        {isloading ? (
            <MySkeleton />
        ) : myLearning.length === 0 ? (
            <p>No learning found</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4   p-4">
                {
                      myLearning.map((course,index)=> <Course key={index} />)
                }
            </div>
          
        )}
    </div>
   );
}

const MySkeleton = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 animate-pulse"
          >
            <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/4 mb-4"></div>
            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  };
