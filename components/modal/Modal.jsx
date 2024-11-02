"use client";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

const Modal = forwardRef(function Modal({ children, className }, ref) {
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
          "right-1/2 top-1/2 z-[60] -translate-y-1/2 translate-x-1/2 transform transition-all duration-300",
          "rounded-xl bg-[#26335D] p-6 shadow-lg",
          className,
          isOpen ? "fixed" : "hidden", // Smooth fade and scale
        )}
        aria-hidden={!isOpen}
        role="dialog"
      >
        {children}
      </div>
    </>,
    document.body,
  );
});

export default Modal;
