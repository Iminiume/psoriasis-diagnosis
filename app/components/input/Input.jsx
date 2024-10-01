"use client";
import React, { useState } from "react";
import "./styles.css";
import classNames from "classnames";

const InputComponent = ({
  label,
  type,
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
    const newValue =
      type === "number" ? Number(e.target.value) : e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col gap-[8px]">
      {label && <span className="placeholder">{label}</span>}
      <input
        className={classNames(
          "bg-inputBg h-[48px] w-[400px] rounded-md border border-white placeholder:px-2",
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
