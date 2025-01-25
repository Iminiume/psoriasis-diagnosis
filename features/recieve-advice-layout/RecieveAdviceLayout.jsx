"use client";
import SectionLayout from "@/view/dashboard/components/section-layout";
import React from "react";
import { Advices, Consts } from "./consts";
import Typography from "@/components/typography";
import Link from "next/link";
import Button from "@/components/button/Button";
import { useUserContext } from "@/utils/context/useUserContext";

function RecieveAdviceLayout() {
  //   const { state } = useUserContext();
  //   const { userData } = state;

  return (
    <SectionLayout title={Consts.title}>
      <div className="flex h-full flex-col justify-between">
        {/* <div className="flex flex-col gap-4">
          <Typography weight="bold" size="xl">
            {Consts.doctorComment}
          </Typography>
          <Typography size="lg">{userData?.DoctorComment}</Typography>
        </div> */}
        <div className="flex flex-col gap-4">
          <Typography size="lg">{Consts.advice}</Typography>
          <div className="flex flex-wrap justify-start gap-4">
            {Advices.map((item, index) => (
              <Link href={item.link} key={`advice-${index}`}>
                <Button>
                  <Typography size="lg">{item.title}</Typography>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default RecieveAdviceLayout;
