import React from "react";
import Typography from "@/components/typography"; // Optional for styled text

const StatsList = ({ stats }) => {
  return (
    <>
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex w-full items-center justify-between gap-4"
        >
          {/* Rank */}
          <Typography className="text-lg font-medium text-white">
            {`رتبه ${item.rank}`}
          </Typography>

          {/* Name */}
          <Typography className="text-lg text-secondTextColor">
            {item.name}
          </Typography>

          {/* Percentage Bar */}
          <div className="flex w-1/2 items-center gap-4">
            <div className="relative h-4 w-full overflow-hidden rounded-sm bg-[#393f54]">
              <div
                className="absolute right-0 top-0 h-full border-l bg-gradient-to-r from-blue-500 to-cyan-400"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <Typography size="sm">{`${item.percentage}%`}</Typography>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatsList;
