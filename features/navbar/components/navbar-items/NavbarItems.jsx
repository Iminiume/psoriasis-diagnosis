import React from "react";
import { NavbarItemsList } from "../../consts";
import Typography from "@/components/typography";
import Link from "next/link";

const HoverText = ({ children }) => (
  <Typography
    size="lg"
    className="text-secondTextColor transition-colors hover:text-mainTextColor"
  >
    {children}
  </Typography>
);

function NavbarItems() {
  return NavbarItemsList.map((item, index) => (
    <Link href={item.link} key={`navbar-item-${index}`}>
      <HoverText>{item.title}</HoverText>
    </Link>
  ));
}

export default NavbarItems;
