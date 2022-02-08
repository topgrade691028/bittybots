// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import character1 from "../../assets/example_1.gif";
import character2 from "../../assets/example_2.gif";
import character3 from "../../assets/example_3.gif";
import character4 from "../../assets/example_4.gif";
import character5 from "../../assets/example_5.gif";
import character6 from "../../assets/example_6.gif";
import character7 from "../../assets/example_7.gif";
import character8 from "../../assets/example_8.gif";
import character9 from "../../assets/example_9.gif";
import character10 from "../../assets/example_10.gif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      {/* <SliderContainer>
        <SliderContent> */}
      <Swiper
        slidesPerView={10}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 1000,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 7,
          },
          1400: {
            slidesPerView: 10,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={character1} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character2} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character3} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character4} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character5} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character6} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character7} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character8} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character9} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character10} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character1} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character2} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character3} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character4} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character5} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character6} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character7} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character8} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character9} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={character10} width="144px" height="auto" alt="logo" />
        </SwiperSlide>
      </Swiper>
      {/* </SliderContent>
      </SliderContainer> */}
    </>
  );
}
