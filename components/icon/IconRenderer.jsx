"use client";

import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { PlayIcon } from "./PlayIcon";
import { EmailIcon } from "./EmailIcon";
import { LocationIcon } from "./LocationIcon";
import { PhoneIcon } from "./PhoneIcon";
import { ChevronRight, ChevronRightIcon } from "./ChevronRightIcon";
import { UserIcon } from "./UserIcon";
import { BurgerIcon } from "./BurgerIcon";
import { XCloseIcon } from "./XCloseIcon";

export const IconRenderer = ({ icon }) => {
  const iconsMap = {
    phone: <PhoneIcon />,
    location: <LocationIcon />,
    email: <EmailIcon />,
    arrowLeft: <ArrowLeftIcon />,
    play: <PlayIcon />,
    chevronRight: <ChevronRight />,
    user: <UserIcon />,
    burger: <BurgerIcon />,
    xClose: <XCloseIcon />,
  };

  // If it's a string (icon name), return corresponding icon, otherwise return the icon JSX
  return typeof icon === "string" ? iconsMap[icon] || null : icon;
};
