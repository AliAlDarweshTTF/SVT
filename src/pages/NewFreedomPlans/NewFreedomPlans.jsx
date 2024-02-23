import "swiper/css";
import "swiper/css/virtual";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation } from "swiper/modules";

import PlanOne from "./PlanOne";
import PlanTwo from "./PlanTwo";
import PlanThree from "./PlanThree";
import PlanFour from "./PlanFour";
import PlanFive from "./PlanFive";
import PlanSix from "./PlanSix";
import PlanSeven from "./PlanSeven";
import PlanEight from "./PlanEight";
import PlanNine from "./PlanNine";

import PrevBtn from "../../assets/images/icon-carousel-prev.svg";
import NextBtn from "../../assets/images/icon-carousel-next.svg";

const NewFreedomPlans = ({ inputElement }) => {
  const slidesArray = [
    <PlanOne />,
    <PlanTwo />,
    <PlanThree />,
    <PlanFour />,
    <PlanFive />,
    <PlanSix />,
    <PlanSeven />,
    <PlanEight />,
    <PlanNine />,
  ];

  return (
    <div className="slider_container">
      <div className="plan_header" ref={inputElement}>
        <h1 className="nfp_title">New Freedom Plans</h1>
        <div className="control_keys">
          <img className="swiper-button-prev" src={PrevBtn} alt="prev" />
          <img className="swiper-button-next" src={NextBtn} alt="next" />
        </div>
      </div>
      <Swiper
        modules={[Virtual, Navigation]}
        spaceBetween={20}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        slidesPerView={3}
        virtual
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {slidesArray.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewFreedomPlans;
