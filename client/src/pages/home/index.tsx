import Navbar from "@/components/Navbar";
import CardSection from "./CardSection";
import TableSection from "./TableSection";
import NotificationSection from "./NotificationSection";

const Home = () => {
  return (
    <div className="bg-[#161616] h-screen">
      <Navbar />
      <div className="flex flex-row px-8 gap-8">
        <div className="">
          <CardSection />
          <TableSection />
        </div>
        <div className="border-2 grow">
          <NotificationSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
