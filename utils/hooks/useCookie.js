import { useCallback, useState } from "react";
import isSSR from "../isSSR";

const isBrowser = typeof window !== "undefined";

export function stringifyOptions(options) {
  return Object.keys(options).reduce((acc, key) => {
    if (key === "days") {
      return acc;
    } else {
      if (options[key] === false) {
        return acc;
      } else if (options[key] === true) {
        return `${acc}; ${key}`;
      } else {
        return `${acc}; ${key}=${options[key]}`;
      }
    }
  }, "");
}

export const setCookie = (name, value, options) => {
  if (isSSR() && !isBrowser) return;

  const optionsWithDefaults = {
    days: 7,
    path: "/",
    ...options,
  };

  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5,
  ).toUTCString();

  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    stringifyOptions(optionsWithDefaults);
};

export const getCookie = (name, initialValue = "") => {
  return (
    (isBrowser &&
      document.cookie.split("; ").reduce((r, v) => {
        const parts = v.split("=");
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
      }, "")) ||
    initialValue
  );
};

export const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export default function (key, initialValue) {
  const [item, setItem] = useState(() => {
    return getCookie(key, initialValue);
  });

  const removeItem = useCallback(() => {
    setItem(undefined);
    removeCookie(key);
  }, [key]);

  const updateItem = useCallback(
    (value, options) => {
      setItem(value);
      setCookie(key, value, options);
    },
    [key],
  );

  return [item, updateItem, removeItem];
}
