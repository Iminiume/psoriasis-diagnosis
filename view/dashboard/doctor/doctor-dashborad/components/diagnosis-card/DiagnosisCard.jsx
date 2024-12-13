import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import React from "react";

function DiagnosisCard({ icon, count, title }) {
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
}

export default DiagnosisCard;
