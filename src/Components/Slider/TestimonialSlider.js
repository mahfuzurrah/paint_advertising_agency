import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function TestimonialSlider() {
  return (
      <div>T
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="ts_list">
          <p>
          Ce partenariat n'est pas simplement professionnel, il est marqué par une réelle collaboration. L'équipe de PaintConnect se distingue par son professionnalisme, sa réactivité et son souci constant du détail. Leur passion pour l'art et leur engagement envers l'excellence ont créé une dynamique positive qui transcende les simples relations professionnelles.
          PaintConnect est bien plus qu'une agence publicitaire ; c'est un partenaire stratégique qui a contribué de manière significative à notre succès. Nous sommes impatients de poursuivre cette collaboration fructueuse et de continuer à repousser les limites de la créativité publicitaire dans le monde de l'art.
          </p>
          <div className="user">
            <img src="" alt="" />
            <div className="name">
              <h3>Fiona </h3>
              <p className="title">Directeur artistique</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="ts_list">
          <p>
          Ce partenariat n'est pas simplement professionnel, il est marqué par une réelle collaboration. L'équipe de PaintConnect se distingue par son professionnalisme, sa réactivité et son souci constant du détail. Leur passion pour l'art et leur engagement envers l'excellence ont créé une dynamique positive qui transcende les simples relations professionnelles.
          PaintConnect est bien plus qu'une agence publicitaire ; c'est un partenaire stratégique qui a contribué de manière significative à notre succès. Nous sommes impatients de poursuivre cette collaboration fructueuse et de continuer à repousser les limites de la créativité publicitaire dans le monde de l'art.
          </p>
          <div className="user">
            <img src="" alt="" />
            <div className="name">
              <h3>Fiona </h3>
              <p className="title">Directeur artistique</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="ts_list">
          <p>
          Ce partenariat n'est pas simplement professionnel, il est marqué par une réelle collaboration. L'équipe de PaintConnect se distingue par son professionnalisme, sa réactivité et son souci constant du détail. Leur passion pour l'art et leur engagement envers l'excellence ont créé une dynamique positive qui transcende les simples relations professionnelles.
          PaintConnect est bien plus qu'une agence publicitaire ; c'est un partenaire stratégique qui a contribué de manière significative à notre succès. Nous sommes impatients de poursuivre cette collaboration fructueuse et de continuer à repousser les limites de la créativité publicitaire dans le monde de l'art.
          </p>
          <div className="user">
            <img src="" alt="" />
            <div className="name">
              <h3>Fiona </h3>
              <p className="title">Directeur artistique</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="ts_list">
          <p>
          Ce partenariat n'est pas simplement professionnel, il est marqué par une réelle collaboration. L'équipe de PaintConnect se distingue par son professionnalisme, sa réactivité et son souci constant du détail. Leur passion pour l'art et leur engagement envers l'excellence ont créé une dynamique positive qui transcende les simples relations professionnelles.
          PaintConnect est bien plus qu'une agence publicitaire ; c'est un partenaire stratégique qui a contribué de manière significative à notre succès. Nous sommes impatients de poursuivre cette collaboration fructueuse et de continuer à repousser les limites de la créativité publicitaire dans le monde de l'art.
          </p>
          <div className="user">
            <img src="" alt="" />
            <div className="name">
              <h3>Fiona </h3>
              <p className="title">Directeur artistique</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
      </div>
  )
}

export default TestimonialSlider