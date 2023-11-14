import { FC, CSSProperties } from "react";

type CardProps = {
  title: string;
  subtitle: string;
  height?: string;
  width?: string;
};

const Card: FC<CardProps> = ({ title, subtitle, height, width }) => {
  const cardStyle: CSSProperties = {
    height: height || "auto",
    width: width || "auto",
    background:
      "linear-gradient(111deg, rgba(57, 57, 57, 0.96) -9.03%, #393939 16.88%, rgba(57, 57, 57, 0.48) 73.55%, rgba(57, 57, 57, 0.70) 95%, rgba(57, 57, 57, 0.00) 113.07%)",
  };

  return (
    <div
      className="flex  justify-center items-center flex-col gap-4 border border-secondary-900 shadow-md rounded-md py-4 px-8 m-4"
      style={cardStyle}
    >
      <h2 className="text-secondary-50 text-[1.375rem]">{title}</h2>
      <p className="text-secondary-100 text-[2rem]">{subtitle}</p>
    </div>
  );
};

export default Card;
