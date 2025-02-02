"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Service", url: "/service" },
    { name: "Projects", url: "/projects" },
    { name: "Resume", url: "/resume" },
    { name: "Contact", url: "/contact" },
  ];
  
  const pathname = usePathname();

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)} 
      >
        <CiMenuFries className="text-accent text-[45]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-10 text-center text-2xl">
          <Link href="/" onClick={closeSheet}>
            <h1 className="text-2xl font-semibold">
              Portfolio<span className="">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex gap-8 flex-col justify-between items-center">
          {navLinks.map((nav, index) => (
            <Link
              href={nav.url}
              key={index}
              onClick={closeSheet}
              className={`${
                nav.url === pathname
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } font-medium hover:text-accent transition-all text-white`}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
