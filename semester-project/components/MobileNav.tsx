"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Page } from "@/components/NavBar";

const MobileNav = ({ open, clickHandler, pages }: { open: boolean; clickHandler: (open: boolean) => void; pages: Page[] }) => {
  const pathname = usePathname();

  return (
    <div>
      <button
        onClick={() => clickHandler(!open)}
        className="text-green-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      <ul className={cn("flex flex-col gap-2 mt-2", { hidden: !open })}>
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={cn(
                  "uppercase block whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-green-900 hover:bg-green-200",
                  {
                    "bg-green-700 text-green-100 pointer-events-none":
                      pathname === href,
                  }
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;