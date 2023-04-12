import React, { useRef, useState } from "react";
import { Container } from "@mui/material";
import Events from "../Components/Home/Event/event";
import Banner from "../Components/Home/Banner/banner";
import Listbutton from "../Components/Home/Listbutton/listbutton";
import Footerhome from "../Components/Home/Layout/footerhome";
import Headerhome from "../Components/Home/Layout/headerhome";




const Home = () => {
  return (
    <Container maxWidth="sm">
  
      <Headerhome />
      <Listbutton />
      <Events />
      <Banner />
      <Footerhome />
     </Container>
  );
};
export default Home;