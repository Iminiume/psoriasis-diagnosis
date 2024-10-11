"use client";
import Home from "@/view/home";
import UiComponents from "@/view/ui-components";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <Home />;
  // return <UiComponents />;
}
