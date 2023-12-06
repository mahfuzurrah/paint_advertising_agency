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
            Lorem ipsum dolor sit amet consectetur. Duis rhoncus eget sed
            consectetur erat lobortis viverra. Aliquam id convallis
            pellentesque id quis bibendum. Accumsan sit eget leo amet
            elementum vestibulum nisl. Accumsan id massa vel eu auctor
            massa scelerisque lectus. At elementum nunc cras hendrerit
            diam imperdiet. Curabitur lectus lacus ornare ornare morbi
            vitae integer nec.
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
            Lorem ipsum dolor sit amet consectetur. Duis rhoncus eget sed
            consectetur erat lobortis viverra. Aliquam id convallis
            pellentesque id quis bibendum. Accumsan sit eget leo amet
            elementum vestibulum nisl. Accumsan id massa vel eu auctor
            massa scelerisque lectus. At elementum nunc cras hendrerit
            diam imperdiet. Curabitur lectus lacus ornare ornare morbi
            vitae integer nec.
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
            Lorem ipsum dolor sit amet consectetur. Duis rhoncus eget sed
            consectetur erat lobortis viverra. Aliquam id convallis
            pellentesque id quis bibendum. Accumsan sit eget leo amet
            elementum vestibulum nisl. Accumsan id massa vel eu auctor
            massa scelerisque lectus. At elementum nunc cras hendrerit
            diam imperdiet. Curabitur lectus lacus ornare ornare morbi
            vitae integer nec.
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
            Lorem ipsum dolor sit amet consectetur. Duis rhoncus eget sed
            consectetur erat lobortis viverra. Aliquam id convallis
            pellentesque id quis bibendum. Accumsan sit eget leo amet
            elementum vestibulum nisl. Accumsan id massa vel eu auctor
            massa scelerisque lectus. At elementum nunc cras hendrerit
            diam imperdiet. Curabitur lectus lacus ornare ornare morbi
            vitae integer nec.
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