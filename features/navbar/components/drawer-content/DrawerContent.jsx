import React from "react";
import NavbarItems from "../navbar-items";
import DashboardButton from "../dashboard-button";
import LoginButton from "../login-button";
import Link from "next/link";

function DrawerContent({ isLoggedIn, handleLogOut }) {
  return (
    <div className="flex min-w-[128px] flex-col items-center justify-center gap-8">
      <NavbarItems />

      {isLoggedIn && <DashboardButton />}
      <Link href={isLoggedIn ? "/" : "/login"}>
        <LoginButton
          isLoggedIn={isLoggedIn}
          onClick={isLoggedIn ? handleLogOut : null}
        />
      </Link>
    </div>
  );
}

export default DrawerContent;
