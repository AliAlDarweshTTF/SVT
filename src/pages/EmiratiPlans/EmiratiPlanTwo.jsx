import "./EmiratiPlan.css";
import "swiper/css";
import "swiper/css/virtual";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation } from "swiper/modules";

import PlanFive from "./PlanFive";
import PlanSix from "./PlanSix";
import PlanSeven from "./PlanSeven";
import PlanEight from "./PlanEight";

import PrevBtn from "../../assets/images/icon-carousel-prev.svg";
import NextBtn from "../../assets/images/icon-carousel-next.svg";

const EmiratiPlanTwo = ({showContractPlans, setShowContractPlans}) => {
 
  const slidesArray = [<PlanFive />, <PlanSix />, <PlanSeven />, <PlanEight />];

  return (
    <div className="slider_container">
      <div className="plan_header">
        <h1 className="title">Postpaid plans with no contract</h1>
        <div className="control_keys">
          <img className="swiper-button-prev" src={PrevBtn} alt="prev" />
          <img className="swiper-button-next" src={NextBtn} alt="next" />
        </div>
      </div>

      {showContractPlans && (
        <div className="postpaid_section_two">
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
      )}
    </div>
  );
};

export default EmiratiPlanTwo;
