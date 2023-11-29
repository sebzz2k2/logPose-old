import Card from "@/components/Cards";

const CardSection = () => {
  const cardData = [
    {
      title: "Highest downtime",
      subtitle: "2 minutes",
    },
    {
      title: "Lowest downtime",
      subtitle: "2 minutes",
    },
    {
      title: "Total servers",
      subtitle: "28",
    },
  ];
  return (
    <div className="">
      <div className="text-white font-normal text-lg mb-4">
        Review Status of server
      </div>
      <div className="flex flex-row grow-1 gap-8 ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            width="16rem"
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
