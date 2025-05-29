import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Course from "./Course";
import { useLoaduserQuery } from "@/features/api/authapi";
const Profile = () => {
    const isloading=false;
    const enrolledCourses = [1];
    const {data,isLoading} =useLoaduserQuery();
    if(isLoading){
      return <div>Loading...</div>
    }
    const {user} = data;
  
    
    return (
    <div className="max-w-4xl mx-auto px-4 my-24">
      <h1 className="text-2xl font-bold text-center md:text-left">Profile</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 ">
        <div className="flex flex-col items-center">
          <Avatar className="h-32 w-32 mb-4 rounded-full">
            <AvatarImage src={user.photoURL || "https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="text-sm font-medium ">
              Name:
              <span className="font-normal text-gray-900 dark:text-gray-300 ml-2">
                {user.name}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1  className="text-sm font-medium">
              Email:
              <span className="font-normal text-gray-900 dark:text-gray-300 ml-2">
              {user.email}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="text-sm font-medium">
              Role:
              <span className="font-normal text-gray-900 dark:text-gray-300 ml-2">
                {user.role.toUpperCase()}
              </span>
            </h1>
          </div>
          <Dialog>
                <DialogTrigger>
                    <Button size="sm" className="mt-2">
                        Edit Profile
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-sm font-medium">
                                Name
                            </Label>
                            <Input type="text" id="name" placeholder="Name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-sm font-medium">
                                Profile Picture
                            </Label>
                            <Input type="file" accept="image/*" id="name"  className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                     <Button disabled={isloading}>
                        {
                            isloading?(
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> please wait...
                                </>
                              
                            ):(
                                "Save Changes"
                            )
                        }
                     </Button>

                    </DialogFooter>
                </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg">Courses You have Enrolled</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {
        user.enrolledCourses.length===0?(
          <h1 className="text-gray-500">No courses enrolled</h1>
        ):(
          user.enrolledCourses.map((course)=><Course course={course} key ={course._id}/>)
        )
          }
        </div> 
      </div>
    </div>
  );
};
export default Profile;
