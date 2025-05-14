import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
const Login = () => {
  const [LoginInput, setLoginInput] = useState({ email: "", password: "" });
  const [SignupInput, setSignupinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupinput({ ...SignupInput, [name]: value });
    } else {
      setLoginInput({ ...LoginInput, [name]: value });
    }
  };
  return (
    <div className="flex items-center w-full justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Signin">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Create a new account and click signup when you are done
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input Input="text" onChange={(e)=>{changeInputHandler(e,"signup")}}  required="true" name="name" value={SignupInput.name} placeholder="Eg: luffy"/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                onChange={(e)=>{changeInputHandler(e,"signup")}}
                  Input="email"
                  required="true"
                  name="email" value={SignupInput.email}
                   placeholder="Eg: luffy@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input Input="password" onChange={(e)=>{changeInputHandler(e,"signup")}}  required="true" name="password" value={SignupInput.password} placeholder="xyz@123" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Sign up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Signin">
          <Card>
            <CardHeader>
              <CardTitle>Sign in </CardTitle>
              <CardDescription>
                Login your passward here. After sign up
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  Input="email"
                  required="true"
                  onChange={(e)=>{changeInputHandler(e,"signin")}}
                  name="email" value={LoginInput.email}
                  placeholder="Eg: luffy@gmail.com"               
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">password</Label>
                <Input Input="password"  onChange={(e)=>{changeInputHandler(e,"signin")}}required="true" name="password" value={LoginInput.password} placeholder="xyz@123"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button> Login </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Login;
