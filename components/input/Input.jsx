"use client";

import React, { forwardRef, useState } from "react";
import classNames from "classnames";

const InputComponent = forwardRef(
  (
    {
      label,
      type = "text",
      required = false,
      disabled = false,
      onChange,
      className,
      autoComplete = "off",
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label className="input-label">{label}</label>}
        <input
          ref={ref}
          className={classNames(
            "h-12 rounded-md border border-white bg-inputBg px-2",
            className,
          )}
          type={type}
          required={required}
          disabled={disabled}
          onChange={(e) => onChange(e?.target.value)}
          autoComplete={autoComplete}
          {...rest}
        />
      </div>
    );
  },
);
InputComponent.displayName = "InputComponent";

export default InputComponent;
