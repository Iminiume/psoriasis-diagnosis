"use client";
import React, { useRef } from "react";
import Typography from "@/components/typography";
import IconRenderer from "@/components/icon/IconRenderer";
import { useUserContext } from "@/utils/context/useUserContext";
import { RoleEnum, RoleEnumFa } from "@/utils/enum/role-enum";
import Drawer from "@/components/drawer";
import Button from "@/components/button";
import DashboardSidebarContent from "./components/dashboard-sidebar-content";

function DashboardLayout({ children, data }) {
  const { state } = useUserContext();
  const { role } = state;
  const drawerRef = useRef(null);

  const handleDrawerOpen = () => drawerRef.current.open();
  const handleDrawerClose = () => drawerRef.current.close();

  return (
    <section className="h-screen bg-pinkShadow bg-contain bg-right bg-no-repeat lg:px-8">
      <div className="mx-auto flex h-full max-w-custom">
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
                {role === RoleEnum.PATIENT
                  ? RoleEnumFa.PATIENT
                  : RoleEnumFa.DOCTOR}
              </Typography>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-1">
                <IconRenderer icon="user" />
                <Typography>{data?.FirstName}</Typography>
                <Typography>{data?.LastName}</Typography>
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
    </section>
  );
}

export default DashboardLayout;
