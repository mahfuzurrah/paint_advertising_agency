import React from "react";
import about_img from "../Components/assets/Votre.png";
import Sites_web_big from "../Components/assets/big_img_2.png";
import Artists1 from "../Components/assets/Artists1.png";
import Artists2 from "../Components/assets/Artists2.png";
import Artists3 from "../Components/assets/Artists3.png";
import Artists4 from "../Components/assets/Artists4.png";

function ÉvénementsArtistiques() {
  return (
    <>
      <section className="service_banner">
        <div className="container">
          <div className="banner_text">
            <h1>Événements Artistiques</h1>
          </div>
        </div>
      </section>
      <section className="about_service">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text left_text">
                <div className="title">
                  <h3 className="ex-font mb-2">
                    Amplifiez votre impact artistique avec PaintConnect :
                  </h3>
                  <h2 className="mb-4">
                    Votre porte d'entrée préférée vers l'Exposition universelle
                  </h2>
                </div>
                <p className="mt-2">
                  À la recherche d'une visibilité accrue et d'une portée
                  mondiale pour votre marque artistique ou votre événement
                  exclusif?
                </p>
                <p className="mt-3">
                  <b>Ne cherchez pas plus loin. PaintConnect</b>, la plateforme
                  de régie publicitaire hautement spécialisée dans le monde de
                  l'art de la peinture, vous offre l'opportunité sans précédent
                  de placer votre marque sous les feux des projecteurs de la
                  scène artistique mondiale.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={about_img} className="services_img" alt="" />
            </div>
            <div className="col-12 mt-5 text-center">
              <h2 className="mb-4">En collaborant avec PaintConnect</h2>
              <p className="mt-2">
                Vous avez la garantie d'une exposition stratégique auprès d'une
                communauté engagée d'artistes, de collectionneurs passionnés et
                d'amateurs d'art du monde entier. Notre plateforme offre un
                accès exclusif à un réseau diversifié d'espaces publicitaires de
                premier plan, permettant ainsi à votre marque de se positionner
                de manière percutante au sein du paysage artistique actuel.
              </p>
              <p className="mt-4">
                Que vous organisiez un vernissage exclusif, un événement de
                lancement de produit artistique ou que vous souhaitiez
                simplement accroître la visibilité de votre marque auprès d'une
                audience internationale, PaintConnect est l'allié stratégique
                idéal pour répondre à vos besoins publicitaires spécifiques.
              </p>
            </div>
            <div className="col-12 mt-5">
              <img src={Sites_web_big} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="discover">
        <div className="container">
        <div className="section_title">
            <p>our Artists</p>
            <h2>
              Maximisez l’impact de votre marque avec nos solutions
              publicitaires.
            </h2>
            <p className="mt-3 des">
              Notre équipe dévouée travaille en étroite collaboration avec vous
              pour concevoir des solutions publicitaires sur mesure, adaptées à
              votre identité de marque et à vos objectifs de visibilité, vous
              permettant ainsi de maximiser votre impact artistique et de
              positionner votre marque au cœur de la conversation artistique
              mondiale.
            </p>
          </div>
          <div className="artists_list grid_4">
            <img src={Artists1} alt="" />
            <img src={Artists2} alt="" />
            <img src={Artists3} alt="" />
            <img src={Artists4} alt="" />
          </div>
          <div className="join_us mt-5">
            <h2>Join us on this artistic adventure </h2>
            <p>Discover how PaintConnect can give you the visibility your brand deserves. Contact us today to explore partnership opportunities and propel your brand to new heights of artistic fame.</p>
            <button className="btn mt-3">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ÉvénementsArtistiques;
