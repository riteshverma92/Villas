import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <footer
        className={`${isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"}`}
        style={{ color: "white", opacity: 1 }}
      >
        <div className="container" style={{ color: "white", opacity: 1 }}>
          <h4 style={{ color: "white", opacity: 1 }}>LUXURY RENTALS</h4>

          <p style={{ color: "white", opacity: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et
            minus voluptatibus corporis eligendi quasi iure nihil eum reiciendis
            quod.
          </p>

          <ul>
            <li>
              <Link to="/" style={{ color: "white", opacity: 1 }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/termsandconditions" style={{ color: "white", opacity: 1 }}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "white", opacity: 1 }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="container" style={{ color: "white", opacity: 1 }}>
          <h4 style={{ color: "white", opacity: 1 }}>Connect with us</h4>
          <p style={{ color: "white", opacity: 1 }}>+91 9260943685</p>
          <p style={{ color: "white", opacity: 1 }}>riteshverma1055@gmail.com</p>
          <p style={{ color: "white", opacity: 1 }}>
            © All Rights Reserved By Ritesh.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
