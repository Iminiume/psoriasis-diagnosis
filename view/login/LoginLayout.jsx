import Image from "@/components/image";
import React from "react";
import LoginThumbnail from "@/public/images/loginThumb.png";
import Link from "next/link";
import Typography from "@/components/typography";
import Logo from "@/public/images/logo.png";
import FormModule from "./form-module";
import IconRenderer from "@/components/icon/IconRenderer";
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
        <Link href="/" className="absolute right-[34px] top-[42px] flex gap-2">
          <IconRenderer icon="chevronRight" />
          <Typography>{Texts.goBack}</Typography>
        </Link>

        <div className="flex w-full basis-1/2 flex-col items-center justify-center px-[50px] py-[80px] lg:px-[110px]">
          <div className="flex items-center justify-center gap-4">
            <Typography size="2xl">{Texts.to}</Typography>
            <Image alt="logo" src={Logo} />
            <Typography size="2xl">{Texts.welcome}</Typography>
          </div>
          <FormModule />
        </div>
      </div>

      <div className="z-10 hidden basis-1/2 rounded-[40px] lg:block">
        <Image alt="login-thumbnail" src={LoginThumbnail} />
      </div>

      <div className="absolute right-0 top-0 z-[-1]">
        <Image alt="pink-shadow" src={PinkShadow} />
      </div>

      <div className="absolute right-0 top-0">
        <Image alt="vector-background" src={VectorBG} />
      </div>
    </div>
  );
}

export default LoginLayout;
