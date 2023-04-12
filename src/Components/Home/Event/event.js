import * as React from "react";
import * as ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "swiper/css";
import { Link } from "react-router-dom";

export default function Events() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];

  return (
    <div className="event">
      <div className="layouttextbutton">
        <div className="layouttextbutton__text">Sự kiện sắp tới</div>
        <div className="layouttextbutton__button">
          <Link href="#"><em>Xem tất cả</em><ArrowRightIcon></ArrowRightIcon></Link>
        </div>
      </div>
      <Swiper slidesPerView={"auto"} spaceBetween={30} className="mySwiper">
        <SwiperSlide>
          <Card className="event__card">
            <div className="event__header">
              <div className="event__time">
                <div className="event__date">10</div>
                <div className="event__month">JUNE</div>
              </div>
              <div className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </div>
            </div>
            <CardMedia
              className="event__img"
              sx={{ height: 231}}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3" component="div">
                International Band Mu...
              </Typography>
            </CardContent>
            <div className="event__number">
              <ImageList
                className="event__listimg"
                sx={{ width: 100 }}
                cols={3}
                rowHeight={32}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <span>+20 Tham gia</span>
            </div>
            <div className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>36 Guild Street London, UK </em>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="event__card">
            <div className="event__header">
              <div className="event__time">
                <div className="event__date">10</div>
                <div className="event__month">JUNE</div>
              </div>
              <div className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </div>
            </div>
            <CardMedia
              className="event__img"
              sx={{ height: 231}}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3" component="div">
                International Band Mu...
              </Typography>
            </CardContent>
            <div className="event__number">
              <ImageList
                className="event__listimg"
                sx={{ width: 100 }}
                cols={3}
                rowHeight={32}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <span>+20 Tham gia</span>
            </div>
            <div className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>36 Guild Street London, UK </em>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="event__card">
            <div className="event__header">
              <div className="event__time">
                <div className="event__date">10</div>
                <div className="event__month">JUNE</div>
              </div>
              <div className="event__inconbox">
                <BookmarkIcon></BookmarkIcon>
              </div>
            </div>
            <CardMedia
              className="event__img"
              sx={{ height: 231}}
              image="img/event1.png"
              title="green iguana"
            />
            <CardContent className="event__title">
              <Typography gutterBottom variant="h3" component="div">
                International Band Mu...
              </Typography>
            </CardContent>
            <div className="event__number">
              <ImageList
                className="event__listimg"
                sx={{ width: 100 }}
                cols={3}
                rowHeight={32}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <span>+20 Tham gia</span>
            </div>
            <div className="event__location">
              <LocationOnIcon></LocationOnIcon>
              <em>36 Guild Street London, UK </em>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
