import { Title, Text } from "@/app/components/typography";
import Link from "next/link";
import React from "react";
import Login from "../login";

const navbarItems = [
  { title: "خانه", link: "/" },
  { title: "آموزش", link: "/learn" },
  { title: "توصیه", link: "/suggestions" },
  { title: "درباره ما", link: "/about-us" },
];

const textLogo = { text: "مراقب باش" };

const HoverText = ({ children }) => {
  return <Text className={""}>{children}</Text>;
};

function Navbar() {
  return (
    <div className="container mx-auto flex h-[91px] w-full items-center justify-center gap-[40px]">
      <Link href={"/"}>
        <Title className={"text-[24px] text-disabledElementColor"}>
          {textLogo.text}
        </Title>
      </Link>

      <div className="md:gap-15 flex justify-between gap-10 py-[3px] lg:gap-[240px]">
        <div className="flex items-center justify-center gap-[21px]">
          {navbarItems.map((item) => (
            <Link href={item.link}>
              <Text>{item.title}</Text>
            </Link>
          ))}
        </div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
