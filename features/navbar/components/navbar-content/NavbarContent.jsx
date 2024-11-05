import React from "react";
import NavbarItems from "../navbar-items";
import Button from "@/components/button";
import IconRenderer from "@/components/icon/IconRenderer";
import DashboardButton from "../dashboard-button";
import LoginButton from "../login-button";
import Link from "next/link";

function NavbarContent({ isLoggedIn, handleLogOut, handleDrawerOpen }) {
  return (
    <>
      <div className="hidden items-center gap-8 lg:flex">
        <NavbarItems />
      </div>
      <div className="lg:hidden">
        <Button onClick={handleDrawerOpen}>
          <IconRenderer icon="burger" />
        </Button>
      </div>
      <div className="hidden gap-4 lg:flex">
        {isLoggedIn && <DashboardButton />}
        <Link href={isLoggedIn ? "/" : "/login"}>
          <LoginButton
            isLoggedIn={isLoggedIn}
            onClick={isLoggedIn ? handleLogOut : null}
          />
        </Link>
      </div>
    </>
  );
}

export default NavbarContent;
