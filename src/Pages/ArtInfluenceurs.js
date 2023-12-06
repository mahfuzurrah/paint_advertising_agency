import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import about_img from "../Components/assets/Gagnez.png";
import sl_1 from "../Components/assets/carouselImg/sl1.png";
import sl_2 from "../Components/assets/carouselImg/sl2.png";
import le_monde from "../Components/assets/le_monde.png";

function ArtInfluenceurs() {
  return (
    <>
      <section className="service_banner">
        <div className="container">
          <div className="banner_text">
            <h1>Art-influenceurs</h1>
          </div>
        </div>
      </section>
      <section className="about_service">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div className="text left_text">
                <div className="title">
                  <h2 className="mb-4">
                    Gagnez en visibilité grâce à une campagne d'influence
                    artistique
                  </h2>
                </div>
                <p className="mt-2">
                  Dans l'univers créatif de la peinture, la promotion de votre
                  art est essentielle pour élargir votre audience et accroître
                  votre notoriété. Les artistes d'aujourd'hui tirent parti des
                  campagnes d'influence pour se connecter avec une communauté
                  passionnée et présenter leur vision artistique de manière
                  innovante.
                </p>
                <p className="mt-3">
                  N'hésitez pas à rejoindre PaintConnect, la Régie publicitaire
                  dédiée à propulser votre art vers de nouveaux sommets.
                </p>
                <button className="btn mt-4">Contactez-nous</button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img src={about_img} alt="" className="services_img" />
            </div>
          </div>
          <div className="row align-items-center reverse">
            <div className="col-lg-6 col-sm-12">
              <img src={le_monde} alt="" className="services_img" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="text">
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
          </div>
        </div>
      </section>
      <section className="discover">
        <div className="container">
          <div className="section_title">
            <p>Sur PaintConnect</p>
            <h2>
              Nos artistes-influenceurs captivent des milliers de passionnés
              d'art
            </h2>
            <p className="mt-3 des">
              Offrant une opportunité sans précédent pour exposer vos œuvres,
              partager vos expositions et mettre en avant votre portfolio. Que
              vous recherchiez une exposition ponctuelle ou une promotion
              continue de votre style artistique, notre équipe est là pour vous
              accompagner dans l'exploration de ces opportunités uniques,
              offrant ainsi une vitrine exclusive à votre talent et votre
              créativité.
            </p>
          </div>
          <div className="mt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              pagination={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="slider_content">
                  <div className="slider_img">
                    <img src={sl_1} alt="" />
                  </div>
                  <div className="social_link">
                    <Link to="">
                      <FaFacebookF className="icons" />
                    </Link>
                    <Link to="">
                      <FaInstagram className="icons" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_content">
                  <div className="slider_img">
                    <img src={sl_2} alt="" />
                  </div>
                  <div className="social_link">
                    <Link to="">
                      <FaFacebookF className="icons" />
                    </Link>
                    <Link to="">
                      <FaInstagram className="icons" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_content">
                  <div className="slider_img">
                    <img src={sl_1} alt="" />
                  </div>
                  <div className="social_link">
                    <Link to="">
                      <FaFacebookF className="icons" />
                    </Link>
                    <Link to="">
                      <FaInstagram className="icons" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Découvrez dès!</h2>
          <p className="my-3">
            Maintenant comment nos services de campagnes d'influence peuvent
            propulser votre art vers de nouveaux horizons. Explorez notre
            brochure pour en savoir plus sur nos offres adaptées à votre style
            artistique.
          </p>
          <button className="btn">Get Started</button>
        </div>
      </section>
    </>
  );
}

export default ArtInfluenceurs;
