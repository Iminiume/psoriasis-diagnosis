"use client";
import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { Consts } from "./consts";

function MainDashboard() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Link href={"/dashboard/requests"}>
        <Button>{Consts.newRequest}</Button>
      </Link>
    </div>
  );
}

export default MainDashboard;
