import React from "react";
import PostsLayout from "../../features/posts-layout";
import Typography from "@/components/typography";
import { Consts } from "./consts";

function DiseaseTypes() {
  return (
    <PostsLayout>
      <div className="flex flex-col gap-6">
        <div>
          <Typography size="lg">{Consts.description}</Typography>
        </div>
        <div className="flex flex-col gap-2">
          <Typography size="2xl" weight="bold">
            {Consts.psoriazisType}
          </Typography>
          <ul className="flex list-disc flex-col gap-6">
            {Consts.items.map((item) => {
              return (
                <div className="flex flex-col gap-2">
                  <li>
                    <Typography size="xl" weight="bold">
                      {item.title}
                    </Typography>
                  </li>
                  <Typography size="lg">{item.description}</Typography>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </PostsLayout>
  );
}

export default DiseaseTypes;
