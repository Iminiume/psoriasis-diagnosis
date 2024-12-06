import React from "react";
import dynamic from "next/dynamic";

const FirstSection = dynamic(() => import("./first-section"));
const SecondSection = dynamic(() => import("./second-section"));
const ThirdSection = dynamic(() => import("./third-section"));
const FourthSection = dynamic(() => import("./fourth-section"));
const SixthSection = dynamic(() => import("./sixth-section"));

function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <SixthSection />
    </>
  );
}

export default Home;
