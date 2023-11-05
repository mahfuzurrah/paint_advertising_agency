import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="grid_4">
          <div className="footer_item">
            <h3>PaintConnect</h3>
            <p className="text mt-2">
              Lorem ipsum dolor sit amet consectetur. Vulputate proin vestibulum
              quis. Lorem ipsum dolor sit amet consectetur. Vulputate proin
              vestibulum quis.
            </p>
          </div>
          <div className="footer_item">
            <h3>Liens rapides</h3>
            <ul className="mt-2">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">À propos </Link>
              </li>
              <li>
                <Link to="">Blogs</Link>
              </li>
              <li>
                <Link to="">Portefeuille</Link>
              </li>
              <li>
                <Link to="">FAQs</Link>
              </li>
              <li>
                <Link to="">Témoignages</Link>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <h3>Services</h3>
            <ul className="mt-2">
              <li>
                <Link to="">Conception de campagne</Link>
              </li>
              <li>
                <Link to="">Partenariats de contenu</Link>
              </li>
              <li>
                <Link to="">Gestion des réseaux sociaux</Link>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <h3>Entrer en contact</h3>
            <ul className="mt-2">
              <li>
                <Link to="#">
                  <FaPhoneAlt className="icons " />
                  +971-52-16111109
                </Link>
              </li>
              <li>
                <Link to="#">
                  <HiEnvelope className="icons " />
                  info@paintconnect.com
                </Link>
              </li>
            </ul>
            <div className="social_media_list">
              <Link to=""><BiLogoFacebook className="icons"/></Link>
              <Link to=""><BiLogoTwitter className="icons"/></Link>
              <Link to=""><BiLogoLinkedin className="icons"/></Link>
              <Link to=""><BiLogoInstagram className="icons"/></Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <p>
            © Tous droits réservés.paintconnect. Informations sur la licence
            d'image.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
