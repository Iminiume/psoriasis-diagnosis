import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import classNames from "classnames";
import React from "react";

function StepCard({ icon, disabled, label, index }) {
  const itemColors = {
    0: "bg-[#268AFF]",
    1: "bg-[#1ED6FF]",
    2: "bg-[#3DFFDC]",
    3: "bg-[#36F097]",
  };

  return (
    <div
      className={classNames(
        "flex min-h-[82px] items-center justify-start gap-4 rounded-xl border border-cardBorderOp30 px-[18px] py-[10px] shadow-xl",
        disabled ? "text-[#5B5B5B]" : "text-black",
        disabled ? "bg-[#252B42]" : itemColors[index],
      )}
    >
      <IconRenderer icon={icon} />
      <Typography>{label}</Typography>
    </div>
  );
}

export default StepCard;
