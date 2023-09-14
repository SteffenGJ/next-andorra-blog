"use client";

import BlogPost from "@/components/BlogPost";
import Header from "@/components/Header";
import NoAccount from "@/components/error/NoAccount";
import NotGrantedAccess from "@/components/error/NotGrantedAccess";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import url from "../../../url";

export default function Content() {
  const [content, setContent] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/api/content/${localStorage.getItem("id")}`)
      .then((res) => {
        setContent(res.data.content.reverse());
      })
      .catch((errRes) => {
        setError(errRes.response.data.error);
      });
  }, []);

  if (error.name === "NoAccountError") {
    return <NoAccount error={error} />;
  }

  if (error.name === "NotGrantedAccessError") {
    return <NotGrantedAccess error={error} />;
  }

  if (content.length > 0) {
    return (
      <div>
        <Header first={true} />
        <div className="p-5 sm:px-20 md:px-40 lg:px-60 flex flex-col gap-10 items-center bg-slate-100">
          {content.map((post) => (
            <BlogPost key={post._id} data={post} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Header first={true} />
      <div className="text-center w-full">
        <p className="my-2">Loading...</p>
        <p>
          Disclaimer: Hvis det tager lang tid om at loade, så skyldes det ikke
          at hjemmesiden er dårligt bygget, men nærmere fordi jeg bruger gratis
          rendering. Hav tålmodigheden i orden.
        </p>
      </div>
    </div>
  );
}
