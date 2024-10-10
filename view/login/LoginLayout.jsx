import Image from "@/components/image";
import React from "react";
import LoginThumbnail from "@/public/images/loginThumb.png";
import Link from "next/link";
import { Text, Title } from "@/components/typography";
import Logo from "@/public/images/logo.png";

import FormModule from "./form-module";
import { IconRenderer } from "@/components/icon/IconRenderer";
import PinkShadow from "@/public/images/pinkShadow.png";
import VectorBG from "@/public/images/vector.png";
const Texts = {
  goBack: "بازگشت",
  to: "به",
  welcome: "خوش آمدید",
};

function LoginLayout() {
  return (
    <div className="mx-auto flex gap-[38px] px-[40px] py-[40px]">
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center rounded-[40px] border border-loginBorder bg-loginBg backdrop-blur-[54px]">
        <Link
          href={"/"}
          className="absolute right-[34px] top-[42px] flex gap-2"
        >
          <IconRenderer icon="chevronRight" />
          <Text className={"text-[16px]"}>{Texts.goBack}</Text>
        </Link>

        <div className="flex w-full flex-col px-[109px]">
          <div className="flex items-center justify-center gap-4">
            <Text className={"text-[24px]"}>{Texts.to}</Text>
            <Image alt="logo" src={Logo} />
            <Text className={"text-[24px]"}>{Texts.welcome}</Text>
          </div>
          <FormModule />
        </div>
      </div>

      <div className="z-10 flex-1 rounded-[40px]">
        <Image alt="login-thumbnail" src={LoginThumbnail} />
      </div>

      <div className="absolute right-0 top-0 z-[-1]">
        <Image alt="pink-shadow" src={PinkShadow}></Image>
      </div>

      <div className="absolute right-0 top-0">
        <Image alt="pink-shadow" src={VectorBG}></Image>
      </div>
    </div>
  );
}

export default LoginLayout;
