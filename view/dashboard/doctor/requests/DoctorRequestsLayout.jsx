"use client";
import React, { useState } from "react";
import SectionLayout from "../../components/section-layout";
import { Consts, FormItems } from "./consts";
import Link from "next/link";
import StepCard from "../../components/step-card";
import Typography from "@/components/typography";
import IconRenderer from "@/components/icon/IconRenderer";

function DoctorRequestsLayout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SectionLayout hasButton={false} title={Consts.title}>
      <div className="flex flex-wrap justify-center gap-[30px]">
        {isOpen && (
          <div className="flex w-full flex-col gap-4 text-wrap rounded-xl border border-cardBorderOp30 bg-cardBg300 p-6 shadow-lg">
            <div className="relative flex justify-center">
              <div
                className="absolute right-0 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <IconRenderer icon="xClose" />
              </div>

              <Typography size="2xl" weight="bold">
                {Consts.guide}
              </Typography>
            </div>
            <ul className="flex list-disc flex-col gap-4 px-6 leading-loose">
              {Consts.instruction.map((item, index) => (
                <li key={`hint-${index}`}>
                  <Typography size="lg">{item}</Typography>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FormItems.map((item, index) =>
            item.disabled ? (
              <div key={item.label} className="pointer-events-none">
                <StepCard
                  icon={item.icon}
                  label={item.label}
                  disabled={false}
                  index={index}
                />
              </div>
            ) : (
              <Link key={item.label} href={item.link}>
                <StepCard
                  icon={item.icon}
                  label={item.label}
                  disabled={false}
                  index={index}
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </SectionLayout>
  );
}

export default DoctorRequestsLayout;
