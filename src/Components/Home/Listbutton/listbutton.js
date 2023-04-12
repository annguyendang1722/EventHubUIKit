import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


export default function Listbutton() {
  return (
    <div className="listbutton">
      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        <SwiperSlide>
          <div className="listbutton__slide">
            <span>
              <img src="img/icon1.png" />
            </span>
            <em>Sports</em>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="listbutton__slide">
            <span>
              <img src="img/icon2.png" />
            </span>
            <em>Music</em>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="listbutton__slide">
            <span>
              <img src="img/icon3.png" />
            </span>
            <em>Food</em>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="listbutton__slide">
           
            <span>
              <img src="img/icon1.png" />
            </span> <em>Food</em>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="listbutton__slide">
            <span>
              <img src="img/icon1.png" />
            </span>
            <em>Sports</em>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="listbutton__slide">
            <span>
              <img src="img/icon2.png" />
            </span>
            <em>Music</em>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="listbutton__slide">
            <span>
              <img src="img/icon3.png" />
            </span>
            <em>Food</em>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="listbutton__slide">
           
            <span>
              <img src="img/icon1.png" />
            </span> <em>Food</em>
          </div>
        </SwiperSlide>



      </Swiper>
    </div>
  );
}
