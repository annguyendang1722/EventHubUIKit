import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Container } from "@mui/material";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
} from "swiper";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Intro = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Container className="intro" maxWidth="sm">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
      
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 intro__sliderimg"
      >
        <SwiperSlide>
          <img src="https://kstatic.googleusercontent.com/files/fc6f00aa19bb2ec3d0498d18b683f38bb317be6192709bd6c6b8678ae15407426778fa39335e9296e27aa5d21457e8d4d30e35a578a85c5cb529a84dfddb9dbe" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://kstatic.googleusercontent.com/files/fc6f00aa19bb2ec3d0498d18b683f38bb317be6192709bd6c6b8678ae15407426778fa39335e9296e27aa5d21457e8d4d30e35a578a85c5cb529a84dfddb9dbe" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://kstatic.googleusercontent.com/files/fc6f00aa19bb2ec3d0498d18b683f38bb317be6192709bd6c6b8678ae15407426778fa39335e9296e27aa5d21457e8d4d30e35a578a85c5cb529a84dfddb9dbe" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        pagination={true} 
        navigation={true}
        slidesPerView={1}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode,Pagination, Navigation, Thumbs]}
        className="mySwiper intro__text"
      >
        <SwiperSlide>
          <Box className="intro__box">
            <div className="intro__inner"><p>Khám phá các sự kiện sắp tới và sự kiện gần nhất</p>
            <em>tận hưởng sự tiện lợi và nhanh chóng khi tham gia sự kiện</em></div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="intro__box">
            <div className="intro__inner"><p>Tra cứu thêm các sự kiện hoặc hoạt động gần đó bằng bản đồ</p>
            <em>sử dụng dịch vụ map để kiềm kiếm di chuyển đến sự kiện của bạn</em></div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box className="intro__box">
            <div className="intro__inner"><p>Khám phá các sự kiện sắp tới và sự kiện gần nhất</p>
            <em>tận hưởng sự tiện lợi và nhanh chóng khi tham gia sự kiện</em></div>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Intro;
