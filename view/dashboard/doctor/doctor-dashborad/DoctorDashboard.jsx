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
import DiagnosisTable from "@/features/diagnosis-table";
import ConvertToShamsiDate from "@/utils/convertToShamsiDate";

const StaticCard = ({ title, icon, count }) => {
  return (
    <div className="flex gap-6 rounded-xl border border-[#ffffff10] bg-[#252B42] p-6 shadow-lg">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#393f54]">
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
  console.log(patientsData);
  return (
    <div className="flex w-full flex-col justify-start gap-12 text-center">
      <div className="grid w-full grid-cols-1 justify-between gap-4 md:grid-cols-2 lg:grid-cols-4">
        {formItems.map((item, index) => (
          <div
            key={`form-item-${index}`}
            className="rounded-xl border border-[#ffffff30] bg-[#26335D] p-6 shadow-lg"
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
          <div className="min-h-96 rounded-xl border border-[#ffffff10] bg-[#252B42] text-start shadow-lg">
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

          <div className="flex min-h-96 w-full flex-col items-center justify-start gap-6 rounded-xl border border-[#ffffff10] bg-[#252B42] p-8">
            <Typography weight="bold" size="3xl">
              {Consts.genderStats}
            </Typography>
            <div className="flex w-full flex-col gap-4">
              <StatsList
                stats={data?.gender_stats.map((item, index) => ({
                  rank: index + 1,
                  name:
                    item?.Gender === Consts.male
                      ? Consts.maleFa
                      : item?.Gender === Consts.female
                        ? Consts.femaleFa
                        : Consts.unknownGender,
                  percentage: item.Percentage,
                }))}
              />
            </div>
          </div>
        </div>
      )}
      {patientsData && (
        <div className="flex flex-col items-start gap-8 rounded-xl border border-[#ffffff10] bg-[#252B42] p-8 shadow-lg">
          <Typography weight="bold" size="3xl">
            {Consts.lastPateints}
          </Typography>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 border-[#ffffff20] p-4 lg:grid-cols-4">
              {" "}
              {/* Adjust last column width */}
              <div className="text-nowrap">
                <Typography weight="bold">{Consts.fullName}</Typography>
              </div>
              <div className="hidden lg:block">
                <Typography weight="bold">{Consts.nationalId}</Typography>
              </div>
              <div className="hidden lg:block">
                <Typography weight="bold">{Consts.timeStamp}</Typography>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col gap-4">
              {patientsData?.slice(0, 10).map((patient, index) => {
                const convertedDate = ConvertToShamsiDate(patient?.CreatedAt);
                return (
                  <div
                    key={`patient-${index}`}
                    className="grid grid-cols-2 flex-nowrap gap-4 overflow-x-auto rounded-xl border-[#ffffff20] bg-[#303F70] p-4 lg:grid-cols-4"
                  >
                    <div className="flex items-center justify-center gap-1 text-nowrap">
                      <Typography>{patient?.FirstName}</Typography>
                      <Typography>{patient?.LastName}</Typography>
                    </div>
                    <div className="hidden text-nowrap lg:block">
                      <Typography>{patient?.NationalId}</Typography>
                    </div>
                    <div className="hidden text-nowrap lg:block">
                      <Typography className="text-secondTextColor">
                        {convertedDate?.timeStamp +
                          " - " +
                          convertedDate.formattedDate}
                      </Typography>
                    </div>
                    {/* Icon Renderer stays fixed */}
                    <div className="flex items-end justify-end bg-[#303F70]">
                      {" "}
                      {/* Adjust width for icon */}
                      <Link href="#">
                        <IconRenderer icon="ellipsis" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorDashboard;
