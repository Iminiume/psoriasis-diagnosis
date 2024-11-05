import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import classNames from "classnames";
import React from "react";

function StepCard({ icon, disabled, label }) {
  return (
    <div
      className={classNames(
        "flex min-h-[82px] min-w-[300px] items-center justify-start gap-4 rounded-xl border bg-[#252B42] px-[18px] py-[10px] shadow-xl",
        disabled ? "border-[#5B5B5B] text-[#5B5B5B]" : "border-[#194CC2]",
      )}
    >
      <IconRenderer icon={icon} />
      <Typography>{label}</Typography>
    </div>
  );
}

export default StepCard;
