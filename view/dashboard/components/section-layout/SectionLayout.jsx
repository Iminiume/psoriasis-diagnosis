"use client";
import Button from "@/components/button/Button";
import Typography from "@/components/typography";
import React from "react";
import { Consts } from "./consts";
import dynamic from "next/dynamic";

const Loading = dynamic(
  () => import("@/components/loading").then((mod) => mod.LoadingNFS),
  {
    ssr: false,
  },
);

function SectionLayout({
  title,
  subTitle,
  children,
  handleSubmit,
  isButtonDisabled,
  loading,
  hasButton = true,
}) {
  return (
    <div className="flex h-full flex-col gap-10 overflow-y-auto">
      <div className="flex flex-col gap-6 p-8 text-center lg:text-start">
        <Typography size="4xl" weight="bold">
          {title}
        </Typography>
        {subTitle && (
          <Typography size="xl" className="text-primaryColor">
            {subTitle}
          </Typography>
        )}
      </div>

      <div className="grow px-8">{children}</div>

      {hasButton && (
        <div className="flex w-full items-center justify-between p-8">
          <div className="h-12 w-12">{loading && <Loading />}</div>
          <Button onClick={handleSubmit} disabled={isButtonDisabled}>
            {Consts.send}
          </Button>
        </div>
      )}
    </div>
  );
}

export default SectionLayout;
