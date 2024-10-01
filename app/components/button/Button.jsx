"use client";
import classNames from "classnames";
import React, { useState } from "react";

function Button({ mode, children, className, disabled = false }) {
  const [isPrimary, setIsPrimary] = useState(mode === "primary"); // Default state
  return (
    <button
      className={classNames(
        "h-[52px] text-nowrap rounded px-[40px] py-[15px] disabled:cursor-not-allowed disabled:bg-disabledElementColor",
        {
          "bg-primaryColor text-white transition-colors hover:bg-disabledElementColor":
            isPrimary, // Primary state
          "border border-primaryColor bg-secondaryColor text-primaryColor transition-colors hover:bg-primaryColor hover:text-white":
            !isPrimary, // Secondary state
        },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
