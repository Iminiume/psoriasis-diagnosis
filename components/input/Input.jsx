"use client";

import React, { forwardRef, useState } from "react";
import classNames from "classnames";

const text = {
  error: "ارور",
};

const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    required = false,
    disabled = false,
    onChange,
    placeholder,
    className,
    autoComplete = "off",
    validateInput,
    successMessage = "Input is valid",
    ...rest
  },
  ref,
) {
  const [isValid, setIsValid] = useState(null);
  console.log(isValid);
  const handleChange = (value) => {
    if (onChange) onChange(value);

    // Validate input based on the passed validation function
    if (validateInput) {
      setIsValid(validateInput(value));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="input-label">{label}</label>}
      <input
        ref={ref}
        className={classNames(
          "h-12 rounded-md border border-[#465370] px-2 transition-colors focus:border-white active:border-white",
          disabled
            ? "cursor-not-allowed border-none bg-[#252932]"
            : "bg-inputBg",
          isValid === true && "border-greenColor text-greenColor",
          isValid === false && "border-redColor text-redColor",
          className,
        )}
        type={type}
        required={required}
        disabled={disabled}
        onChange={(e) => handleChange(e?.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...rest}
      />
      {isValid && <span className="text-greenColor">{successMessage}</span>}
      {!isValid && isValid !== null && (
        <span className="text-redColor">{text.error}</span>
      )}
    </div>
  );
});

export default Input;
