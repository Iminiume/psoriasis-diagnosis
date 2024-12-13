"use client";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import IconRenderer from "../icon/IconRenderer";
import Typography from "../typography";

const Modal = forwardRef(function Modal(
  { children, className, title, onClose },
  ref,
) {
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
    close: () => closeModal(),
  }));

  if (!mounted) return null;

  const closeModal = () => {
    onClose && onClose();
    setIsOpen(false);
  };

  return createPortal(
    <>
      {isOpen && (
        <div
          className={classNames(
            "fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => closeModal()}
        />
      )}
      <div
        className={classNames(
          "right-1/2 top-1/2 z-[60] -translate-y-1/2 translate-x-1/2 transform overflow-y-auto transition-all duration-300",
          "rounded-xl bg-cardBg200 p-6 shadow-lg",
          "max-h-[90%] min-w-[350px] max-w-[90%]",
          className,
          isOpen ? "fixed" : "hidden",
        )}
        aria-hidden={!isOpen}
        role="dialog"
      >
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-start">
            <div className="cursor-pointer" onClick={() => closeModal()}>
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
