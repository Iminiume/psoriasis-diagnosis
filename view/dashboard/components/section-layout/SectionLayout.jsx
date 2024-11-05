"use client";
import Button from "@/components/button/Button";
import Typography from "@/components/typography";
import React from "react";
import { Consts } from "./consts";
import Loading from "@/app/dashboard/loading";

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
    <div className="flex h-full flex-col gap-10">
      <div className="flex flex-col gap-6 p-8">
        <Typography size="5xl" weight="bold">
          {title}
        </Typography>
        <Typography size="2xl" className="text-primaryColor">
          {subTitle}
        </Typography>
      </div>

      <div className="flex-grow overflow-y-auto px-8 scrollbar-hide">
        {children}
      </div>

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
