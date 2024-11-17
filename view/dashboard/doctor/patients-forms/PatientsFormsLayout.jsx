"use client";
import React from "react";
import SectionLayout from "../../components/section-layout";
import { Consts } from "./consts";
import Typography from "@/components/typography";
import classNames from "classnames";
import Link from "next/link";
import IconRenderer from "@/components/icon/IconRenderer";
import { TwoDigitNumber } from "@/utils/twoDigit";
import Button from "@/components/button";

function PatientsFormsLayout({ data }) {
  const MakePatientRow = ({ item, index }) => {
    return (
      <div className="flex min-h-[80px] w-full items-center justify-between border-b">
        <div className="flex items-center justify-start gap-6">
          <div className="flex">
            <Typography weight="bold" size="xl">
              {TwoDigitNumber(index + 1)}
            </Typography>
          </div>

          <div className="flex gap-1">
            <Typography weight="bold" size="xl">
              {item?.FirstName}
            </Typography>
            <Typography weight="bold" size="xl">
              {item?.LastName}
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div
            className={classNames(
              "flex gap-2 rounded p-2",
              item?.IsVerifiedByDoctor ? "bg-greenColor" : "bg-redColor",
            )}
          >
            {item?.IsVerifiedByDoctor ? (
              <IconRenderer icon="check" />
            ) : (
              <IconRenderer icon="xClose" />
            )}
          </div>

          <Link
            href={`/dashboard/doctor/patients-forms/${item?.ID}`}
            className="flex items-center justify-center gap-2"
          >
            <Button className="flex items-center gap-2">
              <Typography size="lg">{Consts.more}</Typography>
              <IconRenderer icon="arrowLeft" />
            </Button>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <SectionLayout title={Consts.title} hasButton={false}>
      <div className="flex flex-col justify-center">
        {data?.map((item, index) => {
          return (
            <MakePatientRow
              item={item}
              key={`patient-row-${index}`}
              index={index}
            />
          );
        })}
      </div>
    </SectionLayout>
  );
}

export default PatientsFormsLayout;
