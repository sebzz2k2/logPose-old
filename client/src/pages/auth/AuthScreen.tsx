import Logo from "@/components/Logo";

export default function AuthScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-black h-screen  w-screen justify-between">
      <div className="left w-1/2 bg-primary-500"></div>
      <div className="right bg-[#161616] w-1/2">
        <div className="header w-full text-end p-6">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
}
