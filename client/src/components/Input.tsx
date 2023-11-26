import { FC, InputHTMLAttributes, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type InputProps = {
  label?: ReactNode;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ type, label, error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputClass = cn(
    "rounded p-2 focus:outline-none focus:border-primary-300 bg-secondary-900 w-full text-secondary-50",
    { "border-red-500": error }
  );

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold mb-1 text-secondary-50">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          className={inputClass}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-2 py-1 "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="text-xl text-secondary-50" />
            ) : (
              <AiOutlineEye className="text-xl text-secondary-50" />
            )}
          </button>
        )}
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-1 absolute">{error}</div>
      )}
    </div>
  );
};

export default Input;
