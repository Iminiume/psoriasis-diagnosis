"use client";
import React, { useRef, useState } from "react";
import Typography from "@/components/typography";
import IconRenderer from "@/components/icon/IconRenderer";
import { useUserContext } from "@/utils/context/useUserContext";
import { RoleEnum, RoleEnumFa } from "@/utils/enum/role-enum";
import Drawer from "@/components/drawer";
import Button from "@/components/button";
import DashboardSidebarContent from "./components/dashboard-sidebar-content";
import Image from "@/components/image";
import BlueShadow from "@/public/images/blueShadow.png";
import { DropDownItems } from "./consts";
import classNames from "classnames";
import { useAuthContext } from "@/utils/context/useAuthContext";
import { useRouter } from "next/navigation";

function DashboardLayout({ children, data }) {
  const { state } = useUserContext();
  const { role } = state;
  const drawerRef = useRef(null);
  const { logout } = useAuthContext();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => drawerRef.current.open();

  return (
    <section className="h-screen overflow-y-hidden bg-pinkShadow bg-contain bg-right bg-no-repeat">
      <div className="mx-auto flex h-full max-w-3xl">
        <div className="hidden h-full w-[300px] flex-col justify-start gap-12 bg-custom-gradient py-12 lg:flex">
          <DashboardSidebarContent />
        </div>

        <div className="h-full w-full overflow-hidden lg:w-[calc(100%-300px)]">
          <div className="flex h-24 items-center justify-between bg-custom-gradient px-8">
            <div className="block lg:hidden">
              <Button onClick={() => handleDrawerOpen()}>
                <IconRenderer icon="burger" />
              </Button>
            </div>
            <div>
              <Typography>
                {(role === RoleEnum.PATIENT && RoleEnumFa.PATIENT) ||
                  (role === RoleEnum.DOCTOR && RoleEnumFa.DOCTOR) ||
                  (role === RoleEnum.ADMIN && RoleEnumFa.ADMIN)}
              </Typography>
            </div>
            <div className="flex gap-6">
              <div
                className="relative flex cursor-pointer items-center gap-1"
                onClick={() => setIsDropDownOpen((prev) => !prev)}
              >
                <IconRenderer icon="user" />
                <Typography>{data?.first_name}</Typography>
                <Typography>{data?.last_name}</Typography>
                <div
                  className={classNames(
                    "relative transition-transform",
                    isDropDownOpen ? "rotate-180" : "rotate-0",
                  )}
                >
                  <IconRenderer icon="chevronDown" />
                </div>

                {isDropDownOpen && (
                  <div className="absolute left-0 top-10 flex flex-col">
                    {DropDownItems.map((item, index) => (
                      <div
                        key={`dashboard-dropdown-${item}`}
                        className={classNames(
                          "flex gap-4 text-nowrap rounded-md border border-cardBorderOp20 bg-cardBg200 p-3 transition-colors hover:bg-cardBg100",
                          item.color,
                        )}
                        onClick={() => {
                          logout();
                          router.refresh();
                          router.push("/");
                        }}
                      >
                        <div>
                          <IconRenderer icon={item.icon} />
                        </div>
                        <Typography>{item.label}</Typography>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="h-[calc(100%-6rem)]">{children}</div>
        </div>
      </div>
      <Drawer ref={drawerRef} direection="right">
        <div className="flex flex-col justify-start gap-12 py-12">
          <DashboardSidebarContent />
        </div>
      </Drawer>
      <div className="absolute left-0 top-0 -z-10 h-full overflow-hidden">
        <Image src={BlueShadow} alt="blu-shadow" />
      </div>
    </section>
  );
}

export default DashboardLayout;
