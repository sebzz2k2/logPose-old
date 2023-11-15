import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

type ChipProps = {
  variant: "pending" | "down" | "running" | "disabled";
} & HTMLAttributes<HTMLDivElement>;

const Chip: FC<ChipProps> = ({ variant = "pending", ...rest }) => {
  const getVariantClass = () => {
    switch (variant) {
      case "pending":
        return "text-yellow-300 border-yellow-300";
      case "down":
        return "border-red-500 text-red-500";
      case "running":
        return "border-green-500 text-green-500";
      case "disabled":
        return "text-secondary-500 border-secondary-500 ";
    }
  };

  return (
    <div
      {...rest}
      className={cn(
        "p-[4px] rounded-full  w-max text-[8px] border bg-transparent",
        getVariantClass(),
        rest.className
      )}
    >
      <span>{variant.toUpperCase()}</span>
    </div>
  );
};

export default Chip;
