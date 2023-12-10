import React from "react";
import './footer.css';

type TitleProps = {
    children: string;
  };
  
  type ListProps = {
    title: string;
    items: string[];
  };
  
  const FooterListTitle = ({ children }: TitleProps) => (
    <div className="font-roboto-condensed font-bold text-2xl whitespace-nowrap text-brand-purple-200 mb-1 lg:mb-5">
      {children}
    </div>
  );
  
  const FooterList = ({ title, items }: ListProps) => {
    return (
      <div>
        <FooterListTitle>{title}</FooterListTitle>
        <ul className="font-roboto text-brand-purple-50">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };


const Footer=()=>{
    return(
        <div className="footer flex flex-col min-h-full ">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                    <FooterList
                 title="COMPANY"
                items={[
                        "New Arrivals",
                        "Privacy Policy",
                        "Terms & Conditions",
                        "About Us",
                        ]}
                    />
                    </div>
                    <div className="sb__footer-links_div">
                    <FooterList
                        title="SITEMAP"
                        items={[
                                "Home",
                                "Featured Products",
                                "Special Offers",
                                "User Resources",
                                "Sign In",
                                ]}
                            />
                    </div>
                    <div className="sb__footer-links_div">
                    <FooterList
                        title="CONTACT US"
                        items={[
                                "Facebook",
                                "Instagram",
                                "Email",
                                "Github",
                                ]}
                            />
                    </div>
                    
                </div>
            <hr></hr>
            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Vego. All rights reserved.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;
