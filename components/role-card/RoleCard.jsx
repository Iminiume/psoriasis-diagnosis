import classNames from "classnames";
import React from "react";
import IconRenderer from "../icon/IconRenderer";
import Typography from "../typography";

function RoleCard({ isSelected, icon, text, onClick }) {
  return (
    <div
      className={classNames(
        "flex h-[245px] w-[346px] cursor-pointer flex-col items-center justify-center gap-[20px] rounded-[32px] border transition-colors",
        isSelected ? "border-greenColor text-greenColor" : "border-white",
      )}
      onClick={onClick}
    >
      <div>
        <IconRenderer icon={icon} />
      </div>
      <Typography size="2xl">{text}</Typography>
    </div>
  );
}

export default RoleCard;
