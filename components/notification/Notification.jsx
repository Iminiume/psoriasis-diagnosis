import { useEffect, useState } from "react";
import IconRenderer from "../icon/IconRenderer";
import ReactDOM from "react-dom";
import classNames from "classnames";

const statusStyles = {
  success: "bg-green-100 border-green-500 text-green-700",
  error: "bg-red-100 border-red-500 text-red-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  info: "bg-blue-100 border-blue-500 text-blue-700",
};

const icons = {
  success: "checkCircle",
  error: "errorCircle",
  warning: "warning",
  info: "infoCircle",
};

const Notification = ({ message, type, duration = 5000, onClose }) => {
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const notificationElement = (
    <div
      className={classNames(
        "fixed bottom-4 right-4 z-40 w-[20rem] max-w-md animate-fadeIn rounded-lg border-l-4 p-4 shadow-lg transition-opacity",
        statusStyles[type],
        showNotification ? "opacity-100" : "opacity-0",
      )}
      role="alert"
    >
      <div className="flex items-center justify-center gap-2 space-x-3">
        <div>
          <IconRenderer icon={icons[type]} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button onClick={handleClose} className="focus:outline-none">
          <div className="text-gray-400 hover:text-gray-500">
            <IconRenderer icon="xClose" />
          </div>
        </button>
      </div>

      <div
        className={classNames(
          "absolute bottom-0 left-0 mx-[2px] h-[2px] rounded-sm bg-green-500",
          `animate-[progress_5s_linear_forwards]`,
        )}
      ></div>
    </div>
  );

  return ReactDOM.createPortal(notificationElement, document.body);
};

export default Notification;
