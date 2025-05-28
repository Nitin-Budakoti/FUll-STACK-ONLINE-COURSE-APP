import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src="https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg"
          alt="imgage"
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="px-4 py-4 space-y-3">
        <h1 className="hover:underline font-bold text-lg truncate">
          Nextjs complete course in hindi
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
                <h1 className="font-medium text-sm ">Nitin MernStack</h1>
          </div>
            <Badge className="bg-blue-500 text-white px-2 py-1 text-xs  rounded-full">
                Advance
            </Badge>

        </div>
        <div className="font-bold text-lg">
            <span className="">
            ₹2999
            </span>
        </div>
      </CardContent>
    </Card>
  );
};
export default Course;
