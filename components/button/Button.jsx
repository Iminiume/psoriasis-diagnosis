"use client";

import classNames from "classnames";
import React from "react";

function Button({
  mode = "primary",
  children,
  className,
  disabled = false,
  onClick,
}) {
  const isPrimary = mode === "primary";

  return (
    <button
      className={classNames(
        "h-[52px] text-nowrap rounded-[0.65rem] px-[40px] py-[15px] disabled:cursor-not-allowed disabled:bg-disabledElementColor",
        {
          "bg-primaryColor text-black shadow-md transition-colors hover:bg-buttonHover":
            isPrimary, // Primary state
          "border border-primaryColor text-primaryColor transition-colors hover:bg-primaryColor hover:text-white":
            !isPrimary, // Secondary state
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
