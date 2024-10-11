// components/Typography.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Typography = ({
  variant,
  size = "md",
  weight = "normal",
  className,
  children,
}) => {
  const Tag = variant || "p";

  // Define styles for different sizes and weights
  const typographyClasses = classNames(
    size === "sm" && "text-sm",
    size === "md" && "text-base",
    size === "lg" && "text-lg",
    size === "xl" && "text-xl",
    size === "2xl" && "text-2xl",
    size === "3xl" && "text-3xl",
    size === "4xl" && "text-4xl",
    size === "5xl" && "text-5xl",
    size === "6xl" && "text-6xl",
    size === "7xl" && "text-7xl",
    size === "8xl" && "text-8xl",
    size === "9xl" && "text-9xl",
    weight === "light" && "font-light",
    weight === "normal" && "font-normal",
    weight === "medium" && "font-medium",
    weight === "semibold" && "font-semibold",
    weight === "bold" && "font-bold",

    className, // Allows for custom styles
  );

  return <Tag className={typographyClasses}>{children}</Tag>;
};

// PropTypes for validation
Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl",
  ]),
  weight: PropTypes.oneOf(["light", "normal", "medium", "semibold", "bold"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Default props
Typography.defaultProps = {
  variant: "p",
  size: "medium",
  weight: "normal",
  className: "",
};

export default Typography;
