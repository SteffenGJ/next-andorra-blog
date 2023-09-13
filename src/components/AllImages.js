"use client";

import Image from "next/image";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Popup from "reactjs-popup";
import ImageGallery from "./ImageGallery";

const AllImages = ({ urls }) => {
  const cleanUrls = urls.map((url) => url.src);
  const [open, setOpen] = useState(false);
  return (
    // <div>
    //   {urls.map((url) => (
    //     <Image key={url} src={url} alt="Blog image" height={500} width={300} />
    //   ))}
    // </div>
    <div>
      <div className="p-4">
        <PhotoAlbum
          layout="masonry"
          photos={urls}
          renderPhoto={({ photo, wrapperStyle }) => (
            <div
              style={{ ...wrapperStyle, position: "relative" }}
              key={photo.key}
              onClick={() => setOpen((prev) => !prev)}
            >
              <Image
                alt="Blog Image"
                fill
                className="rounded-md"
                src={photo.src}
              />
            </div>
          )}
        />
      </div>
      <Popup open={open}>
        <ImageGallery closer={() => setOpen(false)} urls={cleanUrls} />
      </Popup>
    </div>
  );
};

export default AllImages;
