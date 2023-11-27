import Logo from "@/components/Logo";
import hero from "@/assets/images/hero.png";

export default function AuthScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex  h-screen  w-screen justify-between">
      <div className="w-1/2 bg-primary-500 flex items-center justify-center flex-col font-bold text-2xl">
        <img src={hero} alt="hero" className="w-1/2 h-1/2" />
        <div>We keep you informed</div>
      </div>
      <div className="bg-[#161616] w-1/2">
        <div className="header w-full text-end p-6">
          <Logo />
        </div>
        <div className="w-5/6 flex items-center  justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
