import { Menu, School2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter, SheetClose
} from "@/components/ui/sheet";
 

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "@/components/ui/button";
import DarkMode from "@/DarkMode";
 

import { Separator } from "@radix-ui/react-dropdown-menu";
const Navbar = () => {
  let user = true;
  const role = "instructor";
  
  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10  ">
      {/* for desktop */}
    <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2 ml-4">
          <School2 size={30} />
          <h1 className="hidden md:block font-extrabold text-2xl">
            Learning With Manu
          </h1>
        </div>
        <div className="flex items-center gap-8">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem> <Link to="/Mylearning">My learning</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/profile">edit profile</Link></DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuItem>Log out</DropdownMenuItem>
              <DropdownMenuItem>dash board</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-2" >
            <Button variant="outline">sign up</Button>
            <Button >sign in</Button>
          </div>

        )}
         <DarkMode/>
         </div>
      </div>
        {/* MObile device */}
        <div className="flex md:hidden items-center justify-between px-4 h-full">
          <h1 className="font-extrabold text-2xl ">E-Learning with manu</h1>
          <MobileNavBar />
        </div>
        

    </div>
  );
};
export default Navbar;

const MobileNavBar =()=>{
  const role = "instructor";
  return <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className="rounded-full bg-gray-200 hover:bg-gray-200" variant="outline"><Menu /></Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetHeader className='flex flex-row items-center justify-between mt-2'>
          <SheetTitle>E-learning</SheetTitle>
          <div className="mr-12">
            <DarkMode />
          </div>
        </SheetHeader>
        <Separator className="mr-2" />
          <nav className="flex flex-col  space-y-4">
            <Link to="/Mylearning">My learning</Link>
            <span>Edit Profile</span>
            <span>Log out</span>
            {role==="instructor" && (
              <SheetFooter>  
                <SheetClose asChild>
                  <Button variant="outline" type="submit">Dashboard</Button>
                </SheetClose>
              </SheetFooter>
            )}
          </nav>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  



}