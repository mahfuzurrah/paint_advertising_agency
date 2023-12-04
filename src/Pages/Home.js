import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import HomeCarousel1 from "../Components/assets/carouselImg/HomeCarousel1.png";
import HomeCarousel2 from "../Components/assets/carouselImg/HomeCarousel2.png";
import HomeCarousel3 from "../Components/assets/carouselImg/HomeCarousel3.png";
import paint_1 from "../Components/assets/carouselImg/paint_1.png";
import paint_2 from "../Components/assets/carouselImg/paint_2.png";
import paint_3 from "../Components/assets/carouselImg/paint_3.png";
import serviceIcon_1 from "../Components/assets/icons/bulb.png";
import serviceIcon_2 from "../Components/assets/icons/loveShake.png";
import serviceIcon_3 from "../Components/assets/icons/userInfo.png";
import pourquoiChoisirImg from "../Components/assets/pourquoiChoisir.jpeg";
import faqImg from "../Components/assets/chez.png";
import Faq from "../Components/FAQ/Faq";

function Home() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner_text">
            <h3 className="ex-font">Bienvenue Sur Paintconnect</h3>
            <h1>
              La Régie Publicitaire & Agence spécialisée dans l'art de la
              peinture
            </h1>
            <div className="btn_area">
              <button className="btn">Commencer</button>
              <button className="btn_sec">Nos services</button>
            </div>
          </div>
        </div>
      </section>
      <section className="about_paintConnect">
        <div className="grid_2">
          <div className="grid_item">
            <div className="video_area">
              <VideoPlayer />
            </div>
          </div>
          <div className="grid_item">
            <div className="text_content">
              <p className="ex-font">Bienvenue sur PaintConnect</p>
              <h2>
                PaintConnect est l'agence de publicité spécialisée dans la
                peinture.
              </h2>
              <p className="mt-3">
                Votre allié infaillible pour propulser votre présence dans le
                monde captivant de la peinture. En tant qu'agence de publicité
                et de communication passionnée, notre mission est de magnifier
                la beauté et l'expression créative de l'art de la peinture.
              </p>
              <p className="mt-3">
                Notre étroite collaboration avec des artistes de renom, des
                marques de peinture prestigieuses, des fournisseurs d'art de
                premier plan et des publications spécialisées influentes
                renforce notre expertise en matière de stratégies de
                communication globales. ..... En savoir plus
              </p>
            </div>
          </div>
        </div>
        <div className="grid_2">
          <div className="grid_item">
            <div className="text_content left_text_content">
              <h2>
                <span style={{ color: "#AAA186" }}>Pourquoi choisir</span> une
                agence de publicité spécialisée dans le domaine de la peinture ?
              </h2>
              <p className="mt-3">
                Forte d'une vaste expérience dans le monde de la peinture, notre
                agence bénéficie d'une expertise reconnue dans les supports
                artistiques spécialisés. Nous travaillons en étroite
                collaboration avec des acteurs majeurs du monde de l'art, vous
                proposant ainsi une stratégie de communication complète adaptée
                à vos besoins.
              </p>
              <p className="mt-3">
                Faire appel à notre agence PaintConnect Advertising, c'est
                l'assurance de vous faire bénéficier d'une équipe de
                professionnels expérimentés et dédiés à la réussite de vos
                campagnes publicitaires. Nous nous engageons à assurer une
                visibilité optimale à vos produits ou services artistiques, en
                vous fournissant une plateforme pour mettre en valeur votre
                vision créative et capturer l’essence de votre travail.
              </p>
            </div>
          </div>
          <div className="grid_item">
            <div className="video_area">
              <img src={pourquoiChoisirImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="discover_clients discover">
        <div className="container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <img src={HomeCarousel1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HomeCarousel2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HomeCarousel3} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="text_content">
            <h2 className="mb-3">
              Découvrez les opportunités publicitaires exceptionnelles offertes
              par PaintPro Advertising.
            </h2>
            <p>
              En tant qu’agence spécialisée dans la promotion du monde vibrant
              de la peinture, nous vous offrons un accès privilégié à un public
              captivé et engagé. Grâce à notre vaste réseau de partenariats avec
              des publications artistiques influentes, des plateformes en ligne
              de premier plan et des artistes de renom, nous proposons des
              espaces publicitaires stratégiquement positionnés pour assurer une
              visibilité maximale à votre marque. En travaillant avec PaintPro
              Advertising, vous bénéficierez d'une équipe dédiée à maximiser
              l'impact de vos campagnes publicitaires, vous proposant des
              solutions sur mesure telles que des bannières percutantes, des
              partenariats éditoriaux premium et des campagnes vidéo innovantes.
            </p>
            <p className="my-3">
              Notre engagement envers l’excellence et la créativité dans tous
              les aspects de notre travail fait de nous un partenaire de
              confiance pour promouvoir efficacement votre marque auprès d’un
              public passionné par l’art de la peinture.
            </p>
            <p>
              Contactez-nous dès aujourd'hui pour découvrir comment PaintPro
              Advertising peut vous aider à atteindre vos objectifs
              publicitaires et à accroître votre empreinte dans le monde
              passionnant de la peinture.
            </p>
            <button className="btn mt-4">Découvrez nos cas clients</button>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img className="service_img" src={serviceIcon_1} alt="" />
                <div className="card-body">
                  <h3>Conception de campagne</h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur. Duis rhoncus eget
                    sed consectetur erat lobortis viverra. Aliquam id convallis
                    pellentesque id quis bibendum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img className="service_img" src={serviceIcon_2} alt="" />
                <div className="card-body">
                  <h3>Conception de campagne</h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur. Duis rhoncus eget
                    sed consectetur erat lobortis viverra. Aliquam id convallis
                    pellentesque id quis bibendum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img className="service_img" src={serviceIcon_3} alt="" />
                <div className="card-body">
                  <h3>Conception de campagne</h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur. Duis rhoncus eget
                    sed consectetur erat lobortis viverra. Aliquam id convallis
                    pellentesque id quis bibendum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="art_collection">
        <div className="container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content_area">
                <img src={paint_1} alt="" />
                <div className="text_content">
                  <h2>Lorem Ipsum is dolar sit</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, voluptatem.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, voluptatem.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, voluptatem.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, voluptatem.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ab, voluptatem.
                  </p>
                  <button className="btn mt-3">Voir l'œuvre</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="section_title mb-5">
            <p>testimonials</p>
            <h2>Ce qu'ils disent de notre travail</h2>
          </div>
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
      </section>
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <img src={faqImg} alt="" />
                <div className="text_area mt-1">
                  <h3>VOUS AVEZ DES QUESTIONS ?</h3>
                  <p>Startup Framework comprend d'excellentes options de formulaire pour vos projets de démarrage</p>
                  <button className="btn mt-3">Obtenir de l'aide</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Faq/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
