import ReportAPI from "@/api/report";
import Typography from "@/components/typography";
import PatientsTable from "@/features/patients-table";
import { useAuthContext } from "@/utils/context/useAuthContext";
import React from "react";
import { Consts, formItems } from "./consts";
import DiagnosisCard from "../../doctor/doctor-dashborad/components/diagnosis-card";
import { RoleEnum } from "@/utils/enum/role-enum";
import StatsRow from "../../doctor/doctor-dashborad/components/stats-row";
import Link from "next/link";

function AdminDashboard() {
  const { state } = useAuthContext();
  const [{ data, loading }] = ReportAPI.GetReport({ token: state.token });
  const [{ data: patientsData, loading: patientsLoading }] =
    ReportAPI.GetPatients({ token: state.token });

  return (
    <div className="flex w-full flex-col justify-start gap-12 text-center">
      <div className="grid w-full grid-cols-1 justify-between gap-4 md:grid-cols-2 ">
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

export default AdminDashboard;
