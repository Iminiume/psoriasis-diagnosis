"use cache";
import Package from "@/package.json";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/view/home"));

function Page() {
  console.log("Site version: " + Package.version);
  return <Home />;
}

export default Page;
