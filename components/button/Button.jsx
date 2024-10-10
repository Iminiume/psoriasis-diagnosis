"use client";

import React, { memo } from "react";
import classNames from "classnames";

function Button({
  mode = "primary",
  children,
  className,
  disabled = false,
  onClick,
}) {
  const isPrimary = mode === "primary";

  const buttonClass = classNames(
    "h-13 rounded-lg px-10 py-4 disabled:cursor-not-allowed disabled:bg-disabledElementColor",
    {
      "bg-primaryColor text-black shadow-md transition hover:bg-buttonHover":
        isPrimary,
      "border border-primaryColor text-primaryColor transition hover:bg-primaryColor hover:text-white":
        !isPrimary,
    },
    className,
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

export default memo(Button);
