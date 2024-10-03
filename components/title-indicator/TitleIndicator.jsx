"use client";
import React from "react";
import { Title } from "../typography";
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
    <Title
      className={classNames(
        "relative text-[40px] before:absolute before:top-[4rem] before:w-[72px] before:border-[2px]",
        colorClasses[color],
      )}
    >
      {children}
    </Title>
  );
}

export default TitleIndicator;
