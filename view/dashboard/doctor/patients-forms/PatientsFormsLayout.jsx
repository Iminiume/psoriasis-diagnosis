"use client";
import React from "react";
import SectionLayout from "../../components/section-layout";
import { Consts } from "./consts";
import Typography from "@/components/typography";
import classNames from "classnames";
import Link from "next/link";
import IconRenderer from "@/components/icon/IconRenderer";

function PatientsFormsLayout({ data }) {
  return (
    <SectionLayout title={Consts.title} hasButton={false}>
      <div className="flex flex-wrap justify-center gap-8">
        {data?.map((item, index) => (
          <div
            key={item?.ID}
            className={classNames(
              "flex min-w-[300px] flex-col items-center justify-center gap-4 rounded-xl px-[18px] py-[10px] shadow-xl",
              item?.DoctorComment ? "bg-greenColor" : "bg-redColor",
            )}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full border">
              <Typography weight="bold">{index + 1}</Typography>
            </div>
            <div className="flex gap-1">
              <Typography weight="bold" size="xl">
                {item?.FirstName}
              </Typography>
              <Typography weight="bold" size="xl">
                {item?.LastName}
              </Typography>
            </div>

            <div className="flex gap-2">
              <Typography>{Consts.verifiedStatus}</Typography>
              <Typography>
                {item?.IsVerifiedByDoctor
                  ? Consts.isVerified
                  : Consts.notVerified}
              </Typography>
            </div>

            <Link
              href={`/dashboard/doctor/patients-forms/${item?.ID}`}
              className="flex items-center justify-center gap-2"
            >
              <Typography size="lg">{Consts.more}</Typography>
              <IconRenderer icon="arrowLeft" />
            </Link>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default PatientsFormsLayout;
