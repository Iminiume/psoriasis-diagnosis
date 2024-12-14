import Image from "@/components/image";
import React from "react";
import LoginThumbnail from "@/public/images/loginThumb.png";
import Link from "next/link";
import Typography from "@/components/typography";
import Logo from "@/public/images/logo.png";
import FormModule from "./components/form-module";
import IconRenderer from "@/components/icon/IconRenderer";
import PinkShadow from "@/public/images/pinkShadow.png";
import VectorBG from "@/public/images/vector.png";
import { Consts } from "./consts";

function LoginLayout() {
  return (
    <section className="relative h-screen overflow-hidden px-8 py-8">
      <div className="mx-auto flex h-full max-w-custom gap-[38px]">
        <div className="relative flex h-full flex-1 flex-col items-center justify-center rounded-3xl border border-loginBorder bg-loginBg backdrop-blur-[54px]">
          <Link
            href="/"
            className="absolute right-[34px] top-[42px] flex gap-2"
          >
            <IconRenderer icon="chevronRight" />
            <Typography>{Consts.goBack}</Typography>
          </Link>

          <div className="flex w-full basis-1/2 flex-col items-center justify-center px-8">
            <div className="flex items-center justify-center gap-4">
              <Typography size="2xl">{Consts.to}</Typography>
              <Image alt="logo" src={Logo} width={80} height={80} />
              <Typography size="2xl">{Consts.welcome}</Typography>
            </div>
            <FormModule />
          </div>
        </div>

        <div className="hidden h-full basis-1/2 overflow-hidden rounded-3xl lg:block">
          <Image
            alt="login-thumbnail"
            src={LoginThumbnail}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="absolute right-0 top-0 z-[-1]">
        <Image alt="pink-shadow" src={PinkShadow} />
      </div>

      <div className="absolute right-0 top-0 z-[-1]">
        <Image alt="vector-background" src={VectorBG} />
      </div>
    </section>
  );
}

export default LoginLayout;
