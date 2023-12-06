import React from "react";
import './footer.css';



const Footer=()=>{
    return(
        <div className="footer flex flex-col min-h-full ">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>COMPANY</h4>
                        <a href="/new_arrivals">
                            <p>New Arrivals</p>
                        </a>
                        <a href="/privacy_policy">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="/terms_conditions">
                            <p>Terms & Conditions</p>
                        </a>
                        <a href="/about_us">
                            <p>About Us</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>SITEMAP</h4>
                        <a href="/home">
                            <p>Home</p>
                        </a>
                        <a href="/featured_products">
                            <p>Featured products</p>
                        </a>
                        <a href="/special_offers">
                            <p>Special Offers</p>
                        </a>
                        <a href="/user_resources">
                            <p>User resources</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>CONTACT US</h4>
                        <a href="/fb">
                            <p>Facebook</p>
                        </a>
                        <a href="/instagram">
                            <p>Instagram</p>
                        </a>
                        <a href="/email">
                            <p>Email</p>
                        </a>
                        <a href="/github">
                            <p>Github</p>
                        </a>
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
