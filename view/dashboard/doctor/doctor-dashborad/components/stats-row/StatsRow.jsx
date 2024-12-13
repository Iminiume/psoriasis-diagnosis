import DoughnutChart from "@/components/doughnut-chart";
import StatsList from "@/components/stats-list";
import Typography from "@/components/typography";
import { GenderEnum, GenderEnumFa } from "@/utils/enum/gender-enum";
import { psoriazisType } from "@/utils/psoriazisType";
import React from "react";

function StatsRow({ data, consts }) {
  return (
    data && (
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <div className="min-h-96 rounded-xl border border-cardBorderOp10 bg-cardBg100 text-start shadow-lg">
          <DoughnutChart
            label={consts.diagnosisChart}
            stats={data?.diagnosis_stats?.map((item) => ({
              ...item,
              percentage: item?.Percentage,
              label:
                consts.psoriazis + " " + psoriazisType(item?.ServiceResult),
            }))}
          />
        </div>

        <div className="flex min-h-96 w-full flex-col items-center justify-start gap-6 rounded-xl border border-cardBorderOp10 bg-cardBg100 p-8 shadow-lg">
          <Typography weight="bold" size="3xl">
            {consts.genderStats}
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
                      : consts.unknownGender,
                percentage: item.Percentage,
              }))}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default StatsRow;
