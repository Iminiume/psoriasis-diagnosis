"use client";
import Home from "@/view/home";
import { useEffect, useState } from "react";

function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <Home />;
}

export default Page;
