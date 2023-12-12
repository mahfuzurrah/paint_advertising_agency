import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown, BiChevronUp, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const menuItem = [
    {
      name: "Maison",
      url: "/",
    },
    {
      name: "Prestations de service",
      icon: <BiChevronDown className="icons" />,
      subMenu: [
        {
          name: "Presse",
          url: "/presse",
        },
        {
          name: "Sites Web",
          url: "/sites-web",
        },
        {
          name: "Événements Artistiques",
          url: "/événement-artistique",
        },
        {
          name: "Art-influenceurs",
          url: "/art-influenceurs",
        },
      ],
    },
    {
      name: "À propos",
      url: "/about",
    },
    // {
    //   name: "Portefeuille",
    //   url: "/portfolio",
    // },
    // {
    //   name: "Blog",
    //   url: "/blog",
    // },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h3>PaintConnect</h3>
          </Link>
        </div>
        <div className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav_menu">
            {menuItem.map((menuItem) => (
              <li className="nav-item" key={menuItem.name}>
                {menuItem.subMenu ? (
                  <div
                    className={`nav-link ${isSubMenuOpen ? "open" : ""}`}
                    onClick={toggleSubMenu}
                  >
                    {menuItem.name}
                    {isSubMenuOpen ? (
                      <BiChevronUp className="icons" />
                    ) : (
                      <BiChevronDown className="icons" />
                    )}
                  </div>
                ) : (
                  <Link to={menuItem.url} className="nav-link">
                    {menuItem.name}
                  </Link>
                )}
                {menuItem.subMenu && isSubMenuOpen && (
                  <ul className="sub-menu">
                    {menuItem.subMenu.map((subItem) => (
                      <li className="sub-menu-item" key={subItem.name}>
                        <Link to={subItem.url} className="sub-menu-link">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <button className="btn">Contact</button>
          </ul>
        </div>
        <button className="toogle_btn" onClick={toggleMenu}>
          {/* <BiMenu /> */}
          {isMenuOpen ? (
            <AiOutlineClose className="icons" />
          ) : (
            <BiMenu className="icons" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
