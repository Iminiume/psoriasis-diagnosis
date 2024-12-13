import React from "react";
import AdviceLayout from "../components/advice-layout";
import ExerciseImage from "@/public/images/exerciseAdvice.png";
import Typography from "@/components/typography";
import { Consts } from "./consts";

function ExerciseAdvice() {
  return (
    <AdviceLayout image={ExerciseImage}>
      <div className="flex flex-col gap-4">
        <Typography size="2xl" weight="bold">
          {Consts.title}
        </Typography>
        {Consts.recommendations?.map((item, index) => (
          <div key={`recommendation-${index}`}>
            <div className="flex gap-2">
              <Typography size="xl">{index + 1 + "."}</Typography>
              <Typography size="xl">{item?.title}</Typography>
            </div>
            <Typography size="lg">{item?.description}</Typography>
          </div>
        ))}
        <Typography size="lg">{Consts.note}</Typography>
      </div>
    </AdviceLayout>
  );
}

export default ExerciseAdvice;
