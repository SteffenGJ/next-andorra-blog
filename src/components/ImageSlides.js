"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import ImageGallery from "./ImageGallery";

register();

const ImageSlides = ({ imageURLs }) => {
  const [open, setOpen] = useState(false);

  return (
    // <Swiper
    //   navigation
    //   spaceBetween={20} // Adjust as needed
    //   slidesPerView={1} // Show one image at a time
    // >
    //   {imageURLs.map((url, index) => (
    //     <SwiperSlide key={index}>
    //       <Image src={url} alt={`Image ${index}`} width={300} height={500} />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <div>
      <swiper-container slides-per-view="1" navigation="true" pagination="true">
        {imageURLs.map((url) => (
          <swiper-slide key={url}>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Image src={url} alt={`Image`} width={300} height={500} />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      <Popup open={open}>
        <ImageGallery closer={() => setOpen(false)} urls={imageURLs} />
      </Popup>
    </div>
  );
};

export default ImageSlides;
