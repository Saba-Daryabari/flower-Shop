import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "../styles/slider.scss";
import "../styles/globals.scss";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

export default function Slider() {
  return (
    <div className="container">
      <h3 className="introHeading textCenter ">Gift shop</h3>
      <div className="slider-wrapper">
        <Swiper
          modules={[FreeMode, Mousewheel]} // 👈 Added FreeMode
          freeMode={true} // 👈 Enable free scrolling
          spaceBetween={20}
          slidesPerView={4}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map(
            (img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`slide ${i + 1}`} className="img" />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
}
