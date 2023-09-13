"use client";

import AllImages from "@/components/AllImages";
import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import url from "../../../../url";

export default function Images() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/content/${localStorage.getItem("id")}/images`)
      .then((res) => {
        setImages(res.data.images);
      });
  });

  if (images.length > 1) {
    return (
      <div>
        <Header second={true} />
        <AllImages urls={images} />
      </div>
    );
  }

  return (
    <div className="">
      <Header second={true} />
    </div>
  );
}
