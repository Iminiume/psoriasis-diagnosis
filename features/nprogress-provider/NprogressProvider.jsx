// app/layout.js
"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function NProgressProvider({ children }) {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#ff4187"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
