"use client";
import React from "react";
import { Consts } from "./consts";
import Typography from "@/components/typography";

function MainDashboard() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center">
      <Typography weight="bold" size="4xl">
        {Consts.welcome}
      </Typography>
    </div>
  );
}

export default MainDashboard;
