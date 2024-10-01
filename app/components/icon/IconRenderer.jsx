import { ArrowLeft } from "./ArrowLeft";

const { EmailIcon } = require("./EmailIcon");
const { LocationIcon } = require("./LocationIcon");
const { PhoneIcon } = require("./PhoneIcon");

export const IconRenderer = ({ icon }) => {
  const iconsMap = {
    phone: <PhoneIcon />,
    location: <LocationIcon />,
    email: <EmailIcon />,
    arrowLeft: <ArrowLeft />,
  };

  // If it's a string (icon name), return corresponding icon, otherwise return the icon JSX
  return typeof icon === "string" ? iconsMap[icon] || null : icon;
};
