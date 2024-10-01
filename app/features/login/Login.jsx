"use client";
import Button from "@/app/components/button";
import { IconRenderer } from "@/app/components/icon/IconRenderer";
import { Text } from "@/app/components/typography";
import Link from "next/link";
import React, { useState } from "react";

const notLoggedInOptions = [
  { title: "ورود", link: "/login", isButton: false },
  { title: "ثبت نام", link: "/sign-up", isButton: true, icon: "arrowLeft" },
];

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const NotLoggedIn = () => {
    return (
      <div className="flex items-center justify-center gap-[45px]">
        {notLoggedInOptions.map((item) => {
          return (
            <Link href={item.link}>
              {item.isButton ? (
                <Button
                  mode={"primary"}
                  icon={item.icon}
                  className={"flex gap-[15px]"}
                >
                  {item.title}
                  <IconRenderer icon={item?.icon} />
                </Button>
              ) : (
                <Text>{item.title}</Text>
              )}
            </Link>
          );
        })}
      </div>
    );
  };

  return isLoggedIn ? "" : <NotLoggedIn />;
}

export default Login;
