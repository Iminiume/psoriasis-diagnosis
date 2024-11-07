"use client";
import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { Consts } from "./consts";
import Typography from "@/components/typography";

function MainDashboard() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Typography weight="bold" size="4xl">
        {Consts.welcome}
      </Typography>
    </div>
  );
}

export default MainDashboard;
