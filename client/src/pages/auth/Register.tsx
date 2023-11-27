import Input from "@/components/Input";
import AuthScreen from "./AuthScreen";
import Button from "@/components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthScreen>
      <div className="flex flex-col gap-4 mt-14 ml-4 ">
        <div className="flex flex-col gap-1.5">
          <div className="text-white text-xl font-bold">Sign Up</div>
          <div className="text-sm text-white font-normal">
            <div>
              Already Registered?
              <Link className="underline cursor-pointer ml-2" to={"/login"}>
                Login
              </Link>
            </div>
          </div>
        </div>
        <Input label="Email" placeholder="Enter your email" />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <Input
          label="Confirm Password"
          placeholder="Enter your password"
          type="password"
        />
        <Button size="md">Sign Up</Button>
      </div>
    </AuthScreen>
  );
};

export default Register;
