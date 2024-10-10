import classNames from "classnames";
import React from "react";
import { Text } from "../typography";

const StepProgress = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col gap-[54px]">
      {steps.map((item, index) => {
        const isCurrent = index === currentStep;
        const isLastStep = steps.length - 1 === index;
        const isCompleted = index < currentStep;

        return (
          <div
            className="flex items-center gap-4 text-[20px]"
            key={`step-progress-bar-${index}`}
          >
            <div
              className={classNames(
                "relative flex h-[54px] w-[54px] items-center justify-center rounded-[22px] border",
                !isLastStep &&
                  "after:absolute after:right-1/2 after:top-full after:h-[55px] after:border",
                isCompleted
                  ? "border-greenColor text-greenColor after:border-greenColor"
                  : isCurrent
                    ? "border-white text-white after:border-dashed after:border-secondTextColor"
                    : "border-secondTextColor text-secondTextColor after:border-dashed after:border-secondTextColor",
              )}
            >
              {index + 1}
            </div>
            <Text
              className={classNames(
                isCompleted
                  ? "text-greenColor"
                  : isCurrent
                    ? "text-white"
                    : "text-secondTextColor",
              )}
            >
              {item.label}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

export default StepProgress;
