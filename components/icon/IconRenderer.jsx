"use client";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const IconRenderer = ({ icon }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    if (typeof icon === "string") {
   
      const loadIcon = async () => {
        try {
          const { [icon]: LoadedIcon } = await import(`./iconNames.jsx`);
          setIconComponent(() => LoadedIcon);
        } catch (error) {
          console.error(`Error loading icon: ${icon}`, error);
          setIconComponent(null); 
        }
      };

      loadIcon();
    } else {
      setIconComponent(() => icon); 
    }
  }, [icon]);
  if (!IconComponent) return null;

  return <IconComponent />;
};

IconRenderer.propTypes = {
  icon: PropTypes.string,
};

export default IconRenderer;
