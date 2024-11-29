"use client";
import React from "react";
import SectionLayout from "../../components/section-layout";
import { Consts } from "./consts";
import PatientsTable from "@/features/patients-table";

function PatientsFormsLayout({ data }) {
  return (
    <SectionLayout title={Consts.title} hasButton={false}>
      <div className="flex text-center">
        <PatientsTable data={data} consts={Consts} />
      </div>
    </SectionLayout>
  );
}

export default PatientsFormsLayout;
