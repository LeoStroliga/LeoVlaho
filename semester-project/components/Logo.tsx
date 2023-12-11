import { FC } from "react";
import Image from "next/image";

//import LogoIcon from "./icons/LogoIcon";

const Logo: FC = () => (
  <div className="flex items-center justify-between max-w-min gap-2 pl-2">
  
     <img 
      src="/components/icons/1600w-bcDpIBOpUEM.webp" // Replace with the URL of your logo
      alt="Logo" // Provide a descriptive alt text for accessibility
      className="logo-class"
      style={{ width: "50px", height: "50px" }} // Add any additional classes for styling if needed
    />

    <span className="font-roboto-condensed font-bold text-3xl whitespace-nowrap">
      Vego
    </span>
  </div>
);

export default Logo;
