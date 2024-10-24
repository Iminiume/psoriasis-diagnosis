"use client";
import React, { useEffect, useState } from "react";

function ClientLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return <>{children}</>;
}

export default ClientLayout;
