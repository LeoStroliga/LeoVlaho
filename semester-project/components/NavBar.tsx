"use client";
import { useState } from "react";
import Logo from "@/components/Logo";
import MainNav from "@/components/MainNav";
import MobileNav from "@/components/MobileNav";

export type Page = {
  href: string;
  title: string;
};

// Get this info from some external source (e.g. CMS)
const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/cms/FeaturedProducts", title: "Featured Products" },
  { href: "/UserResources", title: "User Resources" },
  { href: "/SignIn", title: "Sign In" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container flex items-start justify-between p-4">
        <div className="flex items-start">
          <Logo />
        </div>
      <div className="hidden lg:block">
        <MainNav pages={pages} />
      </div>
      <div className="lg:hidden">
        <MobileNav open={open} clickHandler={setOpen} pages={pages} />
      </div>
    </div>
  );
};

export default NavBar;