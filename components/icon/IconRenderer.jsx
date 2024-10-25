"use client";

import PropTypes from "prop-types";
import { iconRegistry } from "./iconNames";

const IconRenderer = ({ icon }) => {
  const SelectedIcon = iconRegistry[icon];

  if (!SelectedIcon) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }

  return <SelectedIcon />;
};

IconRenderer.propTypes = {
  icon: PropTypes.string,
};

export default IconRenderer;
