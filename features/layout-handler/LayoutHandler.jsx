"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import isSSR from "@/utils/isSSR";

const ClientLayout = dynamic(() => import("./client-layout"));
const ServerLayout = dynamic(() => import("./server-layout"));

function LayoutHandler({ children }) {
  return isSSR ? (
    <ServerLayout>{children}</ServerLayout>
  ) : (
    <ClientLayout>{children}</ClientLayout>
  );
}

export default LayoutHandler;
