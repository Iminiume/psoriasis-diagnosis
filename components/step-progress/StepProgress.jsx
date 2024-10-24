import classNames from "classnames";
import React from "react";
import Typography from "@/components/typography";
import PropTypes from "prop-types";
import Link from "next/link";

const StepProgress = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col gap-14">
      {steps?.map((item, index) => {
        const isCurrent = index === currentStep;
        const isLastStep = steps.length - 1 === index;
        const isCompleted = index < currentStep;

        return (
          <div
            className="flex items-center gap-4 text-lg"
            key={`step-progress-bar-${index}`}
          >
            <div
              className={classNames(
                "relative flex h-14 w-14 items-center justify-center rounded-[22px] border",
                !isLastStep &&
                  "after:absolute after:right-1/2 after:top-full after:h-14 after:border",
                isCompleted
                  ? "border-greenColor text-greenColor after:border-greenColor"
                  : isCurrent
                    ? "border-white text-white after:border-dashed after:border-secondTextColor"
                    : "border-secondTextColor text-secondTextColor after:border-dashed after:border-secondTextColor",
              )}
            >
              {index + 1}
            </div>
            <Link href={item.link}>
              <Typography
                className={classNames(
                  isCompleted
                    ? "text-greenColor"
                    : isCurrent
                      ? "text-white"
                      : "text-secondTextColor transition-colors hover:text-white",
                )}
              >
                {item.label}
              </Typography>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default StepProgress;
