import Button from "@/components/button";
import Link from "next/link";
import React from "react";
import { Consts } from "../../consts";
import Typography from "@/components/typography";

function DashboardButton() {
  return (
    <Link href={"/dashboard"}>
      <Button mode="secondary">
        <Typography size="xl" weight="medium">
          {Consts.dashboard}
        </Typography>
      </Button>
    </Link>
  );
}

export default DashboardButton;
