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

function TitleIndicator({ color, children }) {
  return (
    <Typography
      variant="h1"
      size="5xl"
      weight="semibold"
      className={classNames(
        "relative before:absolute before:top-[3rem] before:w-[72px] before:border-[2px]",
        colorClasses[color],
      )}
    >
      {children}
    </Typography>
  );
}

export default TitleIndicator;
