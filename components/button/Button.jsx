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
    "h-13 rounded-lg px-10 py-4 disabled:cursor-not-allowed",
    {
      "bg-primaryColor text-black shadow-md transition hover:bg-buttonHover":
        isPrimary && !disabled,
      "border border-primaryColor text-primaryColor transition hover:bg-primaryColor hover:text-white":
        !isPrimary && !disabled,
    },
    className,
  );

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
