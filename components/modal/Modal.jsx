"use client";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import IconRenderer from "../icon/IconRenderer";
import Typography from "../typography";

const Modal = forwardRef(function Modal({ children, className, title }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      setMounted(false);
    };
  }, [isOpen]);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!mounted) return null;

  return createPortal(
    <>
      {isOpen && (
        <div
          className={classNames(
            "fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsOpen(false)} // Toggleable overlay click close
        />
      )}
      <div
        className={classNames(
          "right-1/2 top-1/2 z-[60] max-h-[90%] min-w-[350px] -translate-y-1/2 translate-x-1/2 transform overflow-y-auto transition-all duration-300",
          "rounded-xl bg-[#26335D] p-6 shadow-lg",
          className,
          isOpen ? "fixed" : "hidden", // Smooth fade and scale
        )}
        aria-hidden={!isOpen}
        role="dialog"
      >
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-start">
            <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <IconRenderer icon="xClose" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {title && (
              <div className="flex flex-col gap-2">
                <Typography
                  weight="bold"
                  size="2xl"
                  className="border-b border-[#737373] pb-4"
                >
                  {title}
                </Typography>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
});

export default Modal;
