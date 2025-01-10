import Typography from "@/components/typography";
import PostsLayout from "@/features/posts-layout";
import React from "react";
import { Consts } from "./consts";
import LogoImage from "@/public/images/logo.png";

function AboutUsLayout() {
  return (
    <PostsLayout className="py-16" image={LogoImage}>
      <div className="flex flex-col gap-4">
        <Typography size="2xl" weight="bold">
          {Consts.title}
        </Typography>
        {Consts.description.map((item) => {
          return <Typography size="xl">{item}</Typography>;
        })}
        <div className="flex flex-col gap-2">
          <Typography size="xl">{Consts.ourMission.title}</Typography>
          <ul className="flex list-disc flex-col gap-2 px-4">
            {Consts.ourMission.missions.map((item) => (
              <li>
                <Typography size="xl">{item}</Typography>
              </li>
            ))}
          </ul>
        </div>
        <Typography size="xl">{Consts.secDescription}</Typography>
      </div>
    </PostsLayout>
  );
}

export default AboutUsLayout;
