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
  const handleChange = (value) => {
    if (onChange) onChange(value);

    // Validate input based on the passed validation function
    if (validateInput) {
      setIsValid(validateInput(value));
    }
  };

  const inputClasses = classNames(
    "transition-colors focus:outline-none",
    {
      // Style for regular text input
      "h-12 rounded-md border border-[#465370] px-2 focus:border-white active:border-white":
        type !== "radio",
      // Style for radio input
      "h-6 w-6 rounded border border-[#465370] appearance-none checked:bg-primaryColor checked:border-primaryColor focus:outline-none":
        type === "radio",
    },
    disabled
      ? "cursor-not-allowed border-none bg-[#252932]"
      : type !== "radio" && "bg-inputBg",
    isValid === true && "border-greenColor text-greenColor",
    isValid === false && "border-redColor text-redColor",
    className,
  );

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="input-label">{label}</label>}
      <input
        ref={ref}
        className={inputClasses}
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
