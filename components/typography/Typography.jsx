"use client";
import React from "react";

export const Text = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export const Title = ({ children, className }) => {
  return <h1 className={`font-black ${className}`}>{children}</h1>;
};
