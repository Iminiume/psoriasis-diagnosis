"use client";

import React, { useState } from "react";
import classNames from "classnames";

const InputComponent = ({
  label,
  type = "text",
  value,
  placeholder,
  required = false,
  disabled = false,
  onChange,
  min,
  max,
  pattern,
  className,
  autoComplete = "off",
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (e) => {
    const newValue = type === "number" ? +e.target.value : e.target.value;
    setInputValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="input-label">{label}</label>}
      <input
        className={classNames(
          "h-12 w-full rounded-md border border-white bg-inputBg px-2",
          className,
        )}
        type={type}
        value={inputValue}
        required={required}
        disabled={disabled}
        onChange={handleChange}
        min={min}
        max={max}
        placeholder={placeholder}
        pattern={pattern}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputComponent;
