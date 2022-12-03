import React, { useState } from "react";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Streaming from "../Components/Streaming";
import Upcoming from "../Components/Upcoming";

function Home() {
  return (
    <div>
      <Carousel />
      {/* upcoming movies */}
      <Upcoming />
      {/* streaming Movies */}
      <Streaming />
      {/* support  */}
      <Footer />
    </div>
  );
}

export default Home;
