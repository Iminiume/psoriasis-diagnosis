"use client";

import React from "react";
import NextImage from "next/image";
import classNames from "classnames";

function Image({ src, alt, className }) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={classNames("select-none object-cover", className)}
      loading="lazy"
    />
  );
}

export default Image;
