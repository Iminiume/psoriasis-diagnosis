"use client";
import React from "react";
import { Consts, formItems } from "./consts";
import Typography from "@/components/typography";
import Link from "next/link";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { RoleEnum } from "@/utils/enum/role-enum";
import PatientsTable from "@/features/patients-table";
import ReportAPI from "@/api/report";
import DiagnosisCard from "./components/diagnosis-card";
import StatsRow from "./components/stats-row";
import classNames from "classnames";

function DoctorDashboard() {
  const { state } = useAuthContext();
  const [{ data, loading }] = ReportAPI.GetReport({ token: state.token });
  const [{ data: patientsData, loading: patientsLoading }] =
    ReportAPI.GetPatients({ token: state.token });

  return (
    <div className="flex w-full flex-col justify-start gap-12 text-center">
      <div className="grid w-full grid-cols-1 justify-between gap-4 md:grid-cols-2 lg:grid-cols-4">
        {formItems.map((item, index) => {
          const itemColors = {
            0: "bg-[#268AFF]",
            1: "bg-[#1ED6FF]",
            2: "bg-[#3DFFDC]",
            3: "bg-[#36F097]",
          };
          return (
            <div
              key={`form-item-${index}`}
              className={classNames(
                "rounded-xl border border-cardBorderOp30 p-6 shadow-lg",
                itemColors[index],
              )}
            >
              <Link href={item.link}>
                <Typography className="text-black">{item.title}</Typography>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="grid w-full grid-cols-1 justify-between gap-6 md:grid-cols-2">
        <DiagnosisCard
          title={Consts.patientCounts}
          icon="heart"
          count={data?.role_stats?.map(
            (item) => item.Role === RoleEnum.PATIENT && item?.Count,
          )}
        />
        <DiagnosisCard
          title={Consts.doctorCounts}
          icon="heart"
          count={data?.role_stats?.map(
            (item) => item.Role === RoleEnum.DOCTOR && item?.Count,
          )}
        />
      </div>
      <StatsRow data={data} consts={Consts} />

      {patientsData && (
        <div className="flex flex-col items-start gap-8 rounded-xl border border-cardBorderOp10 bg-cardBg100 p-8 shadow-lg">
          <Typography weight="bold" size="2xl">
            {Consts.lastPateints}
          </Typography>
          <PatientsTable data={patientsData} consts={Consts} />
        </div>
      )}
    </div>
  );
}

export default DoctorDashboard;
