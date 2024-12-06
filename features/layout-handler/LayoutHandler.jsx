"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ClientLayout = dynamic(() => import("./client-layout"), { ssr: false });
const ServerLayout = dynamic(() => import("./server-layout"));

function LayoutHandler({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // if (!isClient) return <ServerLayout>{children}</ServerLayout>;
  return <ClientLayout>{children}</ClientLayout>;
}

export default LayoutHandler;
