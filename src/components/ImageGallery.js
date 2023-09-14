"use client";

import Image from "next/image";
import { register } from "swiper/element/bundle";
import CloseIcon from "@mui/icons-material/Close";

register();

const ImageGallery = ({ closer, urls }) => {
  const imageLoader = ({ src }) => src;

  return (
    <div className="bg-black w-screen h-screen popup-content flex flex-col items-end">
      <button onClick={closer} className="text-white p-4">
        <CloseIcon fontSize="medium" />
      </button>
      <div className="h-full w-full">
        <swiper-container
          slides-per-view="1"
          navigation="true"
          pagination="true"
        >
          {urls.map((url) => {
            return (
              <swiper-slide key={url}>
                <div className="bg-black h-screen ">
                  <Image
                    className="object-contain pb-20"
                    alt="Blog image"
                    fill={true}
                    src={url}
                    loader={imageLoader}
                  />
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </div>
  );
};

export default ImageGallery;
