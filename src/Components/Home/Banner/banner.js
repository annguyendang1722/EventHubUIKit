import * as React from "react";



import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Button from '@mui/material/Button';

import Typography from "@mui/material/Typography";

import "swiper/css";
import { Link } from "react-router-dom";

export default function Banner() {


  return (
    <div className="banner">
 <div className="banner__innerbanner">
            <div className="banner__card">
                  
                <Typography component="div" variant="h3">
                Mời thêm bạn bè
                </Typography>
                <Typography className="banner__des" variant="subtitle1" component="div">
                        <em> Nhận 20$ khi mua vé tham gia</em>
                </Typography>
                <Button variant="contained">MỜI NGAY</Button>
                </div>   
                <div className="banner__img">
             <img src="img/hopqua.png"/>
         </div>
       
          
            </div>

      <div className="layouttextbutton">
        <div className="layouttextbutton__text">Gần bạn nhất</div>
        <div className="layouttextbutton__button">
          <Link href="#"><em>Xem tất cả</em><ArrowRightIcon></ArrowRightIcon></Link>
        </div>
      </div>
    </div>
  );
}
