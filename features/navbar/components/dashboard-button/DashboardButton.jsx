import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { Consts } from "../../consts";

function DashboardButton() {
  return (
    <Link href={"/dashboard"}>
      <Button mode="secondary">{Consts.dashboard}</Button>
    </Link>
  );
}

export default DashboardButton;
