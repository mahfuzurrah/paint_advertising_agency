import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import paint_1 from "../assets/carouselImg/paint_1.png";
import paint_2 from "../assets/carouselImg/paint_2.png";
import paint_3 from "../assets/carouselImg/paint_3.png";

function ArtCollectionSlider() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.realIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(swiperRef.current.swiper.realIndex + 1);
    }
  };

  return (
    <div>
      <div className="swiper_btn">
        <div className="prev_button">
          <button onClick={handlePrev}><MdOutlineNavigateBefore className="icons"/></button>
        </div>
        <div className="next_button">
          <button onClick={handleNext}><MdOutlineNavigateNext className="icons"/></button>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={{
          prevEl: ".prev_button",
          nextEl: ".next_button",
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className="content_area">
            <img src={paint_1} alt="" />
            <div className="text_content">
              <h2>Lorem Ipsum is dolar sit</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                voluptatem.
              </p>
              <button className="btn mt-3">Voir l'œuvre</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_area">
            <img src={paint_2} alt="" />
            <div className="text_content">
              <h2>Lorem Ipsum is dolar sit</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                voluptatem.
              </p>
              <button className="btn mt-3">Voir l'œuvre</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_area">
            <img src={paint_3} alt="" />
            <div className="text_content">
              <h2>Lorem Ipsum is dolar sit</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                voluptatem.
              </p>
              <button className="btn mt-3">Voir l'œuvre</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_area">
            <img src={paint_1} alt="" />
            <div className="text_content">
              <h2>Lorem Ipsum is dolar sit</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                voluptatem.
              </p>
              <button className="btn mt-3">Voir l'œuvre</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_area">
            <img src={paint_2} alt="" />
            <div className="text_content">
              <h2>Lorem Ipsum is dolar sit</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                voluptatem.
              </p>
              <button className="btn mt-3">Voir l'œuvre</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_area">
            <img src={paint_3} alt="" />
            <div className="text_content">
              <h2>Lorem Ipsum is dolar sit</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                voluptatem.
              </p>
              <button className="btn mt-3">Voir l'œuvre</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ArtCollectionSlider;
