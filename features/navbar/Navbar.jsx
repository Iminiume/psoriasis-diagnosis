"use client";
import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Image from "@/components/image";
import Drawer from "@/components/drawer";
import { useScrollPosition } from "@/utils/hooks/useScrollPosition";
import { useAuthContext } from "@/utils/context/useAuthContext";
import Logo from "@/public/images/logo.png";

import NavbarContent from "./components/navbar-content";
import DrawerContent from "./components/drawer-content";

const navStyles = (isScrolled) =>
  classNames(
    "sticky right-0 top-0 z-40 mx-auto flex w-full max-w-custom items-center justify-around gap-10 rounded-b-3xl px-8",
    isScrolled
      ? "h-[106px] bg-gradient-to-b from-background to-[rgba(25, 31, 45, 0) 100%] backdrop-blur-[12px]"
      : "h-[106px]",
  );

const logoStyles = (isScrolled) =>
  classNames("rounded-bl-3xl ", "translate-y-0");

function Navbar() {
  const drawerRef = useRef(null);

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 48;

  const { state, logout } = useAuthContext();
  const isLoggedIn = state?.token;

  const router = useRouter();

  const handleLogOut = () => {
    logout();
    if (router) {
      router.refresh();
    }
  };

  const handleDrawerOpen = () => drawerRef.current?.open();

  return (
    <header className={navStyles(isScrolled)}>
      <Link href="/">
        <div className={logoStyles(isScrolled)}>
          <Image src={Logo} alt="logo" priority width={100} height={100} />
        </div>
      </Link>

      <div className="flex w-full flex-row-reverse items-center justify-between gap-10 lg:flex-row">
        <NavbarContent
          handleDrawerOpen={handleDrawerOpen}
          isLoggedIn={isLoggedIn}
          handleLogOut={handleLogOut}
        />
      </div>

      <Drawer ref={drawerRef} direction="left">
        <DrawerContent isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
      </Drawer>
    </header>
  );
}

export default Navbar;
