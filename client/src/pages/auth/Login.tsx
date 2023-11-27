import { Link } from "react-router-dom";
import AuthScreen from "./AuthScreen";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {
  return (
    <AuthScreen>
      <div className="flex flex-col gap-4 mt-16 ml-4 ">
        <div className="flex flex-col gap-1.5">
          <div className="text-white text-xl font-bold">Login</div>
          <div className="text-sm text-white font-normal">
            <div>
              New here?
              <Link className="underline cursor-pointer ml-2" to={"/register"}>
                Register
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
        <div className="flex flex-col gap-1.5">
          <Button size="md">Login</Button>
          <Link
            className="text-white text-sm font-normal underline break-words"
            to={"/forgot-password"}
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </AuthScreen>
  );
};

export default Login;
