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
    "h-13 rounded-lg px-8 py-4 disabled:cursor-not-allowed shadow-lg text-xl",

    isPrimary &&
      !disabled &&
      "border border-primaryColor bg-primaryColor text-black transition hover:bg-buttonHover",
    !isPrimary &&
      !disabled &&
      "border border-primaryColor text-primaryColor transition hover:bg-primaryColor hover:text-white",
    disabled &&
      "bg-disabledElementColor border border-disabledElementColor text-black",
    className,
  );

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
