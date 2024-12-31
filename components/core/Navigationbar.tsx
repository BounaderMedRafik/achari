"use client";

import { Briefcase, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { ModeToggle } from "../ui/ModeToggle";

type navLinksType = {
  link: string;
  href: string;
  icon: ReactNode;
};
const navLinks: navLinksType[] = [
  {
    link: "Linkedin",
    href: "https://www.linkedin.com/in/bounader-med-rafik/",
    icon: <Linkedin className=" fill-foreground  " size={15} />,
  },
  {
    link: "Github",
    href: "https://github.com/BounaderMedRafik/",
    icon: <Github className=" fill-foreground " size={15} />,
  },
  {
    link: "Portfolio",
    href: "https://bmed.vercel.app/",
    icon: <Briefcase className=" fill-foreground " size={15} />,
  },
];

const Navigationbar = () => {
  return (
    <div className=" w-full flex items-center  justify-center border-b  border-foreground/10 fixed z-50 top-0 left-0 bg-background ">
      <div className="  wrapper w-full flex items-center justify-between py-3">
        <Link
          className=" font-urdu opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
          href={"/"}
        >
          أشعاري
        </Link>
        <div className="flex items-center">
          {navLinks.map((item, i) => (
            <a
              target={"_blank"}
              key={i}
              href={item.href}
              className={
                "p-1.5 group opacity-75 hover:opacity-100  transition-all duration-300 ease-in-out"
              }
            >
              {item.icon}
            </a>
          ))}
          <ModeToggle className="fill-foreground" />
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
