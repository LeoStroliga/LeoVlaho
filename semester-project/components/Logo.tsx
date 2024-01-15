import { FC } from "react";
import Image from "next/image";
import img from "/components/icons/1600w-bcDpIBOpUEM.webp";

//import LogoIcon from "./icons/LogoIcon";

const Logo: FC = () => (
  <div className="flex items-center justify-between max-w-min gap-2 pl-2">
  
        <Image
            src={img.src} // Replace with the URL of your logo
            alt="Logo" // Provide a descriptive alt text for accessibility
            className="logo-class"
            width={50}
            height={50}
    />

    <span style={{color: "blueviolet", fontSize: "40px", fontWeight: "900"}}>
      Vego
    </span>
  </div>
);

export default Logo;
