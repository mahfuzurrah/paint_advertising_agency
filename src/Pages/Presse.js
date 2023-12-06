import React from "react";
import about_img from "../Components/assets/Presse.png";
import d_img_1 from "../Components/assets/d_img_1.png";
import d_img_2 from "../Components/assets/d_img_2.png";
import d_img_3 from "../Components/assets/d_img_3.png";
import d_img_4 from "../Components/assets/d_img_4.png";
import magazines from "../Components/assets/magazines.png";

function Presse() {
  return (
    <>
      <section className="service_banner">
        <div className="container">
          <div className="banner_text">
            <h1>Notre support média presse</h1>
          </div>
        </div>
      </section>
      <section className="about_service">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className="services_img" src={about_img} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="text right_text">
                <h2>
                Pourquoi opter pour la publicité imprimée pour atteindre le monde de l'art ?
                </h2>
                <p className="mt-2">
                Pour toucher la communauté des artistes, il est évident qu'une publicité dans un magazine généraliste pourrait entraîner une perte considérable. Il est bien plus efficace, tant en termes de visibilité que de coût, de faire de la publicité dans des publications ciblées spécifiquement vers les passionnés de la peinture et de l'art.
                </p>
                <p className="mt-3">
                La régie publicitaire dédiée au monde de l'art chez PaintConnect offre aux annonceurs l'opportunité de présenter leurs œuvres dans des publications artistiques de renom. Votre campagne publicitaire bénéficie ainsi d'une exposition plus ciblée et d'une portée accrue, touchant directement votre public cible. Qu'il s'agisse de magazines spécialisés lus par les artistes émergents ou les amateurs d'art, notre régie propose une sélection diversifiée de supports publicitaires, offrant une diffusion totale de plusieurs millions d'exemplaires au sein de la communauté artistique. La publicité imprimée demeure un choix incontournable dans l'industrie de l'art, et les différentes publications proposées par PaintConnect offrent une visibilité incomparable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="discover">
        <div className="container">
          <div className="section_title">
            <p>DÉCOUVREZ...</p>
            <h2>
            Publications spécialisées sur l'art contemporain dédiées aux artistes émergents
            </h2>
          </div>
          <div className="discover_img_row grid_4">
              <img src={d_img_1} alt="" />
              <img src={d_img_2} alt="" />
              <img src={d_img_3} alt="" />
              <img src={d_img_4} alt="" />
          </div>
          <div className="row align-items-center discover_magazines mt-2">
            <div className="col-lg-6 mt-3">
              <h2>Revues d'art contemporain</h2>
              <p>Nos publications sont reconnues par les artistes et amateurs d’art, un public qui apprécie toujours autant la richesse de la presse écrite. Ils permettent aux annonceurs de communiquer efficacement et directement avec leur public, que ce soit chez eux ou dans les galeries d'art les plus prestigieuses.</p>
            </div>
            <div className="col-lg-6 mt-3">
            <img src={magazines} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Presse;
