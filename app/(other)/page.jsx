"use client";
import Home from "@/view/home";
import Package from "@/package.json";

function Page() {
  console.log("Site version: " + Package.version);
  return <Home />;
}

export default Page;
