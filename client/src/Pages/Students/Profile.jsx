import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
const Profile = () => {
    const isloading=false;
  return (
    <div className="max-w-4xl mx-auto px-4 my-24">
      <h1 className="text-2xl font-bold text-center md:text-left">Profile</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 ">
        <div className="flex flex-col items-center">
          <Avatar className="h-32 w-32 mb-4 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="text-sm font-medium ">
              Name:
              <span className="font-normal text-gray-900 dark:text-gray-300 ml-2">
                Manu Mern Stack
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1  className="text-sm font-medium">
              Email:
              <span className="font-normal text-gray-900 dark:text-gray-300 ml-2">
                manu@gmail.com
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="text-sm font-medium">
              Role:
              <span className="font-normal text-gray-900 dark:text-gray-300 ml-2">
                Instructor
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
    </div>
  );
};
export default Profile;
