"use client";
import Image from "next/image";
import React from "react";
import NotFoundImage from "@/public/images/404.png";
function Custom404() {
  return (
    <div className="container mx-auto">
      <Image src={NotFoundImage} className="mx-auto" />
    </div>
  );
}

export default Custom404;
