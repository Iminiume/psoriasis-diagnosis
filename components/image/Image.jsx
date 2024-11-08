"use client";

import React, { memo } from "react";
import NextImage from "next/image";
import classNames from "classnames";

function Image({
  src,
  alt,
  className,
  draggable = false,
  sizes,
  priority = false,
  ...rest
}) {
  return (
    <NextImage
      src={src}
      alt={alt}
      sizes={sizes}
      draggable={draggable}
      priority={priority}
      className={classNames("select-none object-cover", className)}
      loading={priority ? "eager" : "lazy"}
      {...rest}
    />
  );
}

export default memo(Image);
