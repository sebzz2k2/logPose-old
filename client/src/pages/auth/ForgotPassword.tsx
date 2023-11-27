import { Link } from "react-router-dom";
import AuthScreen from "./AuthScreen";
import Input from "@/components/Input";
import Button from "@/components/Button";

export const ForgotPassword = () => {
  return (
    <AuthScreen>
      <div className="flex flex-col gap-4 mt-20 ml-4 ">
        <div className="flex flex-col gap-1.5">
          <div className="text-white text-xl font-bold">Forgot Password</div>
        </div>
        <Input label="Email" placeholder="Enter your email" />
        <div className="flex flex-col gap-2">
          <Button size="md">Send Email</Button>
          <Link
            className="text-white text-sm font-normal underline break-words"
            to={"/login"}
          >
            Back to login
          </Link>
        </div>
      </div>
    </AuthScreen>
  );
};
