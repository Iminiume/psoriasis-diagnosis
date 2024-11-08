"use client";
import Image from "@/components/image";
import Link from "next/link";
import React from "react";
import { Items } from "../../consts";
import { useUserContext } from "@/utils/context/useUserContext";
import { usePathname } from "next/navigation";
import { RoleEnum } from "@/utils/enum/role-enum";
import classNames from "classnames";
import IconRenderer from "@/components/icon/IconRenderer";
import Typography from "@/components/typography";
import ActiveMark from "@/public/images/activeMark.png";

function DashboardSideBarContent() {
  const pathname = usePathname();

  const { state } = useUserContext();
  const { role } = state;

  const roleBasedItems = Items.filter((item) => {
    if (role === RoleEnum.PATIENT && item.forPatient) return true;
    if (role === RoleEnum.DOCTOR && item.forDoctor) return true;
    return false;
  });

  return (
    <>
      <div className="self-center">
        <Link href="/">
          <Image src="/images/textLogo.png" width={72} height={130} priority />
        </Link>
      </div>
      <div>
        {roleBasedItems.map((item) => {
          const isActive = pathname === item.link;
          return (
            <div
              className={classNames(
                "relative px-[40px] py-[20px]",
                isActive && "text-primaryColor",
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
    </>
  );
}

export default DashboardSideBarContent;
