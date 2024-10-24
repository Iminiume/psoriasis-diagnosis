"use client";
import React from "react";
import Typography from "@/components/typography";
import classNames from "classnames";

const colorClasses = {
  primary: "before:border-primaryColor",
  blue: "before:border-blueColor",
  green: "before:border-greenColor",
  orange: "before:border-orangeColor",
  purple: "before:border-purpleColor",
};

const TitleIndicator = ({ color, children, className }) => {
  return (
    <Typography
      variant="h1"
      size="5xl"
      weight="semibold"
      className={classNames(
        "relative text-center leading-normal before:absolute before:top-[4rem] before:w-[72px] before:border-[2px]",
        colorClasses[color],
        className,
      )}
    >
      {children}
    </Typography>
  );
};

export default TitleIndicator;
