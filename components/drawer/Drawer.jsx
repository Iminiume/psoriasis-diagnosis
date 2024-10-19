import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

const Drawer = forwardRef(
  ({ direction = "right", children, className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);

      // Handle body scroll when drawer is open
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

    const directionClasses = {
      right: isOpen ? "translate-x-0" : "translate-x-full",
      left: isOpen ? "translate-x-0" : "-translate-x-full",
      bottom: isOpen ? "translate-y-0" : "translate-y-full",
      top: isOpen ? "translate-y-0" : "-translate-y-full",
    };

    const drawerPositionClasses = {
      right: "right-0 top-0 h-full",
      left: "left-0 top-0 h-full",
      bottom: "bottom-0 w-full",
      top: "top-0 w-full",
    };

    return createPortal(
      <>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setIsOpen(false)} // Close on overlay click
          />
        )}
        <div
          className={classNames(
            "fixed z-[60] transform bg-inputBg shadow-lg transition-transform duration-300 ease-in-out",
            directionClasses[direction],
            drawerPositionClasses[direction],
            className,
          )}
        >
          <div className="p-4">{children}</div>
        </div>
      </>,
      document.body,
    );
  },
);

Drawer.displayName = "Drawer";

Drawer.propTypes = {
  direction: PropTypes.oneOf(["right", "left", "bottom", "top"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Drawer;
