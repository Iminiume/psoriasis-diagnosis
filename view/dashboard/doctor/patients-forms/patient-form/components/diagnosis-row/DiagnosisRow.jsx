import Button from "@/components/button";
import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import React, { useState } from "react";
import { Consts } from "../../consts";
import classNames from "classnames";
import { useUserContext } from "@/utils/context/useUserContext";
import { RoleEnum } from "@/utils/enum/role-enum";

function DiagnosisRow({
  title,
  diagnosis,
  handleInfoModalOpen,
  handleModalOpen,
  isImageForm = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    state: { role },
  } = useUserContext();

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-cardBorderOp10 bg-cardBg100 p-4 shadow-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Typography size="lg">{title}</Typography>
        <IconRenderer
          icon="chevronDown"
          className={classNames("transition-transform", {
            "rotate-180": isExpanded,
          })}
        />
      </div>

      {isExpanded &&
        Object.entries(diagnosis).map(([key, value], index) => (
          <div
            key={`diagnosis-${index}`}
            className={classNames(
              "flex w-full flex-col items-center justify-between gap-4 rounded-xl border border-cardBorderOp20 p-4 shadow-lg lg:flex-row",
              value?.Comments?.length > 0 ? "bg-greenColor" : "bg-cardBg200",
            )}
          >
            <Typography size="lg">
              {isImageForm ? Consts.imageNumber : Consts.formNumber} {index + 1}
            </Typography>
            <div className="flex gap-2">
              <Button onClick={() => handleInfoModalOpen(value)}>
                <Typography>{Consts.seeFormInfo}</Typography>
              </Button>
              <Button onClick={() => handleModalOpen([key, value])}>
                <Typography>
                  {role === RoleEnum.DOCTOR
                    ? Consts.addComment
                    : Consts.seeComments}
                </Typography>
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default DiagnosisRow;
