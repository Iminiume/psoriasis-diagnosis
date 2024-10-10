"use client";
import React from "react";
import classNames from "classnames";

export const Text = ({ children, className = "" }) => {
  return <p className={className}>{children}</p>;
};

export const Title = ({ children, className = "" }) => {
  return <h1 className={classNames("font-black", className)}>{children}</h1>;
};
