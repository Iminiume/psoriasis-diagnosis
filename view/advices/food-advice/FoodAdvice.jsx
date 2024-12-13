import React from "react";
import AdviceLayout from "../components/advice-layout";
import Typography from "@/components/typography";
import { Consts } from "./consts";
import FoodAdviceImage from "@/public/images/foodAdvice.png";

function FoodAdvice() {
  return (
    <AdviceLayout image={FoodAdviceImage}>
      <div className="flex flex-col gap-4">
        <Typography size="2xl" weight="bold">
          {Consts.title}
        </Typography>
        {Consts.dietary_recommendations.map((item, index) => (
          <div key={`recommendation-${index}`}>
            <div className="flex gap-2">
              <Typography size="xl">{index + 1 + "."}</Typography>
              <Typography size="xl">{item?.title}</Typography>
            </div>
            <Typography size="lg">{item?.description}</Typography>
          </div>
        ))}

        <Typography size="2xl" weight="bold">
          {Consts.supplementTitle}
        </Typography>

        {Consts.supplement_recommendations.map((item, index) => (
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

export default FoodAdvice;
