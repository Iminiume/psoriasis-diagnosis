"use client";
import Input from "@/components/input";
import PatientsTable from "@/features/patients-table";
import React, { useState } from "react";
import { Consts } from "./consts";
import SectionLayout from "../../components/section-layout";

function SearchPatientsLayout({ data }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data?.filter((patient) =>
    `${patient?.FirstName} ${patient?.LastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  return (
    <SectionLayout title={Consts.title} hasButton={false}>
      <div className="flex flex-col gap-8">
        <div>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={Consts.searchName}
            className="w-full rounded-md border border-[#ffffff20] bg-[#303F70] p-2 text-white"
          />
        </div>
        <div className="text-center">
          <PatientsTable data={filteredData} consts={Consts} />
        </div>
      </div>
    </SectionLayout>
  );
}

export default SearchPatientsLayout;
