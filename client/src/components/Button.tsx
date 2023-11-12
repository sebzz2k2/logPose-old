import { FC, ReactNode, useMemo } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline";
  type?: "primary" | "secondary";
  children: ReactNode;
};

const defaultProps: ButtonProps = {
  size: "md",
  variant: "filled",
  type: "primary",
  children: null,
};

const Button: FC<ButtonProps> = ({ size, variant, type, children }) => {
  const getSizeClass = useMemo(() => {
    switch (size) {
      case "sm":
        return "text-sm px-4 py-2";
      case "md":
        return "text-base px-6 py-3";
      case "lg":
        return "text-lg px-8 py-4";
      default:
        return "text-base px-6 py-3";
    }
  }, [size]);

  const getVariantClass = useMemo(() => {
    const primaryFilled =
      "bg-primary-500 hover:bg-primary-400 focus:bg-primary-500 text-white";
    const primaryOutline = "border border-primary-500 text-primary-500";
    const secondaryFilled =
      "bg-secondary-800 hover:bg-secondary-700 focus:bg-secondary-900 text-white";
    const secondaryOutline = "border border-secondary-900 text-secondary-900";

    if (type === "primary") {
      return variant === "filled" ? primaryFilled : primaryOutline;
    } else if (type === "secondary") {
      return variant === "filled" ? secondaryFilled : secondaryOutline;
    }

    return "";
  }, [type, variant]);

  const buttonClass = cn("rounded", getSizeClass, getVariantClass);

  return <button className={buttonClass}>{children}</button>;
};

Button.defaultProps = defaultProps;

export default Button;
