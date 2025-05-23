import { Button } from "@/components/ui/button";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authapi";
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
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [LoginInput, setLoginInput] = useState({ email: "", password: "" });
  const [SignupInput, setSignupinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [
    registerUser,
    {
      data: registerData,
      error: RegisterError,
      isloading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isloading: loginIsLoading,
      isSuccess: loginIsSuccess,
    }
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupinput({ ...SignupInput, [name]: value });
    } else {
      setLoginInput({ ...LoginInput, [name]: value });
    }
  };

  const datainputHandler = async (type) => {
    let inputData = type === "Signin" ? LoginInput : SignupInput;
    const action = type === "Signup" ? registerUser : loginUser;
    await action(inputData);
  };
useEffect(() => {
  if (registerIsSuccess && registerData) {
    toast.success(registerData.message || "Signup successfully.");
  }
  if (RegisterError) {
    toast.error(
      RegisterError.data?.message || "Sign up failed"
    );
  }
  if (loginError) {
    toast.error(
      loginError.data?.message || "Login failed"
    );
  }
  if (loginIsSuccess && loginData) {
    toast.success(loginData.Message || "Login successfully.");
  }
}, [
  loginIsSuccess,
  registerIsSuccess,
  loginData,
  registerData,
  loginError,
  RegisterError,
]);

  return (
    <div className="flex items-center w-full justify-center mt-20">
      <Tabs defaultValue="Signup" className="w-[400px]">
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
                <Input
                  type="text"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  required
                  name="name"
                  value={SignupInput.name}
                  placeholder="Eg: luffy"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="email"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  required
                  name="email"
                  value={SignupInput.email}
                  placeholder="Eg: luffy@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  required
                  name="password"
                  value={SignupInput.password}
                  placeholder="xyz@123"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={registerIsLoading}
                onClick={() => datainputHandler("Signup")}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin " />please wait
                  </>
                ) : "Signup"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Signin">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Login your password here. After sign up
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  type="email"
                  required
                  onChange={(e) => changeInputHandler(e, "signin")}
                  name="email"
                  value={LoginInput.email}
                  placeholder="Eg: luffy@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  type="password"
                  onChange={(e) => changeInputHandler(e, "signin")}
                  required
                  name="password"
                  value={LoginInput.password}
                  placeholder="xyz@123"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginIsLoading}
                onClick={() => datainputHandler("Signin")}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin " />please wait
                  </>
                ) : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;