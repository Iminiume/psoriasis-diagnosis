import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import convertToShamsiDate from "@/utils/convertToShamsiDate";
import Link from "next/link";
import React from "react";

const PatientsTable = ({ data, consts }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 border-[#ffffff20] p-4 lg:grid-cols-4">
        <div className="text-nowrap">
          <Typography weight="bold">{consts.fullName}</Typography>
        </div>
        <div className="hidden lg:block">
          <Typography weight="bold">{consts.nationalId}</Typography>
        </div>
        <div className="hidden lg:block">
          <Typography weight="bold">{consts.timeStamp}</Typography>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col gap-4">
        {data?.slice(0, 10).map((patient, index) => {
          const convertedDate = convertToShamsiDate(patient?.CreatedAt);
          return (
            <div
              key={`patient-${index}`}
              className="border-cardBorderOp10 bg-cardBg300 grid grid-cols-2 flex-nowrap gap-4 overflow-x-auto rounded-xl border p-5 shadow-lg lg:grid-cols-4"
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
              <div className="flex items-end justify-end">
                <Link href={`/dashboard/doctor/patients-forms/${patient?.ID}`}>
                  <IconRenderer icon="ellipsis" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientsTable;
