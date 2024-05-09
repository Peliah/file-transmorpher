"use client"

import { useState } from "react";
import Dropzone from "./_components/Dropzone";
import { Button } from "@/components/ui/button";

const page = () => {
  const [isTruncated, setIsTruncated] = useState(false)
  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
          Free Unlimited File Transmorpher

        </h1>
        <div className="text-gray-400 text-base md:text-base text-center md:px-24 xl:px-44 2xl:px-52">
          Effortlessly convert images and video with File Transmorpher.
          Boost productivity and streamline workflows for all your conversion needs.

        </div>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}

export default page;