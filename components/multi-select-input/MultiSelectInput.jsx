"use client";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import IconRenderer from "../icon/IconRenderer";
import Button from "../button";
import Typography from "../typography";

function MultiSelect({ options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const handleRemove = (option) => {
    onChange(value.filter((item) => item !== option));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className="flex cursor-pointer flex-wrap items-center justify-between gap-2 rounded border border-[#465370] bg-inputBg p-2"
        onClick={toggleDropdown}
      >
        {value.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {value.map((selected) => (
              <div
                key={selected}
                className="flex items-center justify-center gap-1 rounded bg-[rgba(38,34,80,0.65)] px-2 py-1 text-white"
              >
                <Typography className="text-center">{selected}</Typography>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(selected);
                  }}
                >
                  <IconRenderer icon="xClose" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
        <div
          className={classNames(
            isOpen ? "rotate-180" : "",
            "absolute left-3 transition-transform",
          )}
        >
          <IconRenderer icon="chevronDown" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-40 w-full overflow-y-auto rounded border bg-inputBg shadow">
          {options.map((option) => (
            <div
              key={option}
              className={classNames(
                "cursor-pointer rounded-sm p-2 transition-colors hover:bg-[#21293a]",
                value.includes(option) ? "bg-[#21293a]" : "",
              )}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
