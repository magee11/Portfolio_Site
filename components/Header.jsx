import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
export const Header = () => {
  return (
    <header className=" p-8  xl:py-10 text-white">
      <div className="cointainer mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl xl:text-4xl font-semibold cursor-pointer">
            Protfolio<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button className="items-center">Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
