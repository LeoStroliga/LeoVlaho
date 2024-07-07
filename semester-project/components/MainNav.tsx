"use client";

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Page } from "@/components/NavBar";

const MainNav = ({ pages }: { pages: Page[] }) => {
  const pathname = usePathname();
  return (
    <nav className="w-full">
      <ul className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:justify-end">
        {pages.map(({ href, title }) => (
          <li key={href} className="w-full lg:w-auto">
            <Link href={href}>
              <span
                className={cn(
                  "block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-green-900 hover:bg-green-200",
                  {
                    "bg-green-700 text-green-100 pointer-events-none": pathname === href,
                  }
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;


