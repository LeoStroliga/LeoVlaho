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
  { href: "/FeaturedProducts", title: "Featured Products" },
  { href: "/blog", title: "Special Offers" },
  { href: "/UserResources", title: "User Resources" },
  { href: "/SignIn", title: "Sign In" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container flex items-center justify-between">
      <Logo />
      <MainNav pages={pages} />
      
      <MobileNav open={open} clickHandler={setOpen} pages={pages} />
    </div>
  );
};

export default NavBar;
