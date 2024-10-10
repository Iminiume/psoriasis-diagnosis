"use client";

import React, { memo } from "react";
import NextImage from "next/image";
import classNames from "classnames";

function Image({ src, alt, className }) {
  return (
    <NextImage
      src={src}
      alt={alt}
      draggable={false}
      className={classNames("select-none object-cover", className)}
      loading="lazy"
      placeholder="blur"
      blurDataURL="/path-to-placeholder.jpg" // Replace with your placeholder
    />
  );
}

export default memo(Image);
