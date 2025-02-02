"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Service", url: "/service" },
    { name: "Projects", url: "/projects" },
    { name: "Resume", url: "/resume" },
    { name: "Contact", url: "/contact" },
  ];
  const pathname = usePathname();
  return (
    <nav className=" flex gap-8">
      {navLinks.map((nav, index) => (
        <Link
          href={nav.url}
          key={index}
          className={`${
            nav.url === pathname ? "text-accent border-b-2 border-accent" : ""
          } font-medium hover:text-accent transition-all`}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
