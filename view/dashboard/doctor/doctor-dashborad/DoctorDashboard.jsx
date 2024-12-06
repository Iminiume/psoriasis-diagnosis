"use client";
import React from "react";
import { Consts, formItems } from "./consts";
import Typography from "@/components/typography";
import Link from "next/link";
import DoctorAPI from "@/api/doctor";
import { useAuthContext } from "@/utils/context/useAuthContext";
import IconRenderer from "@/components/icon/IconRenderer";
import { RoleEnum } from "@/utils/enum/role-enum";
import DoughnutChart from "@/components/doughnut-chart";
import { psoriazisType } from "@/utils/psoriazisType";
import StatsList from "@/components/stats-list";
import PatientsTable from "@/features/patients-table";
import { GenderEnum, GenderEnumFa } from "@/utils/enum/gender-enum";

const StaticCard = ({ title, icon, count }) => {
  return (
    <div className="flex gap-6 rounded-xl border border-cardBorderOp10 bg-cardBg100 p-6 shadow-lg">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-cardBorderOp20 bg-[#393f54]">
        <IconRenderer icon={icon} />
      </div>
      <div className="flex flex-col items-start">
        <Typography weight="bold" size="3xl">
          {count}
        </Typography>
        <Typography className="text-secondTextColor">{title}</Typography>
      </div>
    </div>
  );
};

function DoctorDashboard() {
  const { state } = useAuthContext();
  const [{ data, loading }] = DoctorAPI.GetReport({ token: state.token });
  const [{ data: patientsData, loading: patientsLoading }] =
    DoctorAPI.GetPatients({ token: state.token });

  return (
    <div className="flex w-full flex-col justify-start gap-12 text-center">
      <div className="grid w-full grid-cols-1 justify-between gap-4 md:grid-cols-2 lg:grid-cols-4">
        {formItems.map((item, index) => (
          <div
            key={`form-item-${index}`}
            className="rounded-xl border border-cardBorderOp30 bg-cardBg300 p-6 shadow-lg"
          >
            <Link href={item.link}>
              <Typography>{item.title}</Typography>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid w-full grid-cols-1 justify-between gap-6 md:grid-cols-2">
        <StaticCard
          title={Consts.patientCounts}
          icon="heart"
          count={data?.role_stats?.map(
            (item) => item.Role === RoleEnum.PATIENT && item?.Count,
          )}
        />
        <StaticCard
          title={Consts.doctorCounts}
          icon="heart"
          count={data?.role_stats?.map(
            (item) => item.Role !== RoleEnum.PATIENT && item?.Count,
          )}
        />
      </div>
      {data && (
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="min-h-96 rounded-xl border border-cardBorderOp10 bg-cardBg100 text-start shadow-lg">
            <DoughnutChart
              label={Consts.diagnosisChart}
              stats={data?.diagnosis_stats?.map((item) => ({
                ...item,
                percentage: item?.Percentage,
                label:
                  Consts.psoriazis + " " + psoriazisType(item?.ServiceResult),
              }))}
            />
          </div>

          <div className="flex min-h-96 w-full flex-col items-center justify-start gap-6 rounded-xl border border-cardBorderOp10 bg-cardBg100 p-8 shadow-lg">
            <Typography weight="bold" size="3xl">
              {Consts.genderStats}
            </Typography>
            <div className="flex w-full flex-col gap-4">
              <StatsList
                stats={data?.gender_stats.map((item, index) => ({
                  rank: index + 1,
                  name:
                    item?.Gender === GenderEnum.MALE
                      ? GenderEnumFa.MALE
                      : item?.Gender === GenderEnum.FEMALE
                        ? GenderEnumFa.FEMALE
                        : Consts.unknownGender,
                  percentage: item.Percentage,
                }))}
              />
            </div>
          </div>
        </div>
      )}
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
