import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import { useUserContext } from "@/utils/context/useUserContext";
import convertToShamsiDate from "@/utils/convertToShamsiDate";
import { RoleEnum } from "@/utils/enum/role-enum";
import Link from "next/link";
import React from "react";

const PatientsTable = ({ data, consts, hasLimit = true }) => {
  const { state } = useUserContext();
  const role = state.role;
  const sortedPatients = data?.sort((a, b) => {
    return new Date(b.CreatedAt) - new Date(a.CreatedAt);
  });
  const mainData = hasLimit ? sortedPatients?.slice(0, 10) : sortedPatients;
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
        {mainData?.map((item, index) => {
          const convertedDate = convertToShamsiDate(item?.CreatedAt);
          return (
            <div
              key={`patient-${index}`}
              className="grid grid-cols-2 flex-nowrap gap-4 overflow-x-auto rounded-xl border border-cardBorderOp10 bg-cardBg300 p-5 shadow-lg lg:grid-cols-4"
            >
              <div className="flex items-center justify-center gap-1 text-nowrap">
                <Typography>{item?.FirstName}</Typography>
                <Typography>{item?.LastName}</Typography>
              </div>
              <div className="hidden text-nowrap lg:block">
                <Typography>{item?.NationalId}</Typography>
              </div>
              <div className="hidden text-nowrap lg:block">
                <Typography className="text-secondTextColor">
                  {convertedDate?.timeStamp +
                    " - " +
                    convertedDate.formattedDate}
                </Typography>
              </div>
              <div className="flex items-end justify-end">
                <Link
                  href={`/dashboard/${(role === RoleEnum.DOCTOR && "doctor") || (role === RoleEnum.ADMIN && "admin")}/patients-forms/${item?.ID}`}
                >
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
