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
    <div>
      <swiper-container slides-per-view="1" navigation="true" pagination="true">
        {imageURLs.map((urle) => (
          <swiper-slide key={urle}>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Image src={urle} alt={`Image`} width={300} height={400} />
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
