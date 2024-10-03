"use client";
import React from "react";
import { Title } from "../typography";
import classNames from "classnames";

const colorClasses = {
  primary: "border-primaryColor",
  blue: "border-blueColor",
  green: "border-greenColor",
};

function TitleIndicator({ color, children }) {
  return (
    <Title
      className={classNames(
        "relative text-[40px] before:absolute before:top-[4.5rem] before:w-[72px] before:border-[2px]",
        `before:${colorClasses[color]}`,
      )}
    >
      {children}
    </Title>
  );
}

export default TitleIndicator;
