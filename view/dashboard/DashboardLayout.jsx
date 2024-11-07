"use client";
import React from "react";
import Image from "@/components/image";
import TextLogo from "@/public/images/textLogo.png";
import Typography from "@/components/typography";
import Link from "next/link";
import IconRenderer from "@/components/icon/IconRenderer";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import ActiveMark from "@/public/images/activeMark.png";
import { Items } from "./consts";
import { useUserContext } from "@/utils/context/useUserContext";
import { RoleEnum, RoleEnumFa } from "@/utils/enum/role-enum";

function DashboardLayout({ children, data }) {
  const pathname = usePathname();
  const { state } = useUserContext();
  const { role } = state;

  const roleBasedItems = Items.filter((item) => {
    if (role === RoleEnum.PATIENT && item.forPatient) return true;
    if (role === RoleEnum.DOCTOR && item.forDoctor) return true;
    return false;
  });

  return (
    <section className="h-screen bg-pinkShadow bg-contain bg-right bg-no-repeat lg:px-8">
      <div className="mx-auto flex h-full max-w-custom">
        <div className="flex h-full w-[300px] flex-col justify-start gap-12 bg-custom-gradient py-12">
          <div className="self-center">
            <Link href="/">
              <Image src={TextLogo} />
            </Link>
          </div>
          <div>
            {roleBasedItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <div
                  className={classNames(
                    "relative px-[40px] py-[20px]",
                    isActive ? "text-primaryColor" : "",
                  )}
                >
                  <Link href={item.link} className="flex gap-4">
                    <IconRenderer icon="request" />
                    <Typography>{item.label}</Typography>
                  </Link>
                  {isActive && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <Image src={ActiveMark} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-full w-[calc(100%-300px)] overflow-hidden">
          <div className="flex h-24 items-center justify-between bg-custom-gradient px-8">
            <div>
              <Typography>
                {role === RoleEnum.PATIENT
                  ? RoleEnumFa.PATIENT
                  : RoleEnum.DOCTOR}
              </Typography>
            </div>

            <div className="flex items-center gap-1">
              <IconRenderer icon="user" />
              <Typography>{data?.FirstName}</Typography>
              <Typography>{data?.LastName}</Typography>
            </div>
          </div>
          <div className="h-[calc(100%-6rem)]">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default DashboardLayout;
