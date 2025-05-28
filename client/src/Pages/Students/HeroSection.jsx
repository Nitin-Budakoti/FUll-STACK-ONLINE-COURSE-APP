import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return <div className=" relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from gray-800 dark:to-gray-900 py-16 px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-white text-4xl font-bold  mb-4">Find the best courses for you </h1>
      <p className="text-gray-300 dark:text-gray-400 mb-8">Discover,Learn and Upskill with our online courses</p>
    <div className="w-full">
      <form className="flex items-center rounded-full shadow-lg overflow-hidden w-full mb-6">
        <div className="flex flex-1 items-center bg-white dark:bg-gray-800">
          <input type="text" className="w-full border-none focus:outline-none focus-visible:ring-0 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-6 py-3 bg-transparent" placeholder="Search for a course"/>
        </div>
        <Button type="submit" className="shrink-0 bg-blue-600 text-white px-8 py-3 rounded-r-full rounded-l-none hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-blue-800"> 
            Search
        </Button>
      </form>
      <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-blue-800"> Explore courses </button>
    </div>
    </div>
 
  </div>;
};

export default HeroSection;