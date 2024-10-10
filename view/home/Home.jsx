import React, { useState } from "react";
import dynamic from "next/dynamic";

const FirstSection = dynamic(() => import("./first-section"));
const SecondSection = dynamic(() => import("./second-section"));
const ThirdSection = dynamic(() => import("./third-section"));
const FourthSection = dynamic(() => import("./fourth-section"));
const FifthSection = dynamic(() => import("./fifth-section"));
const SixthSection = dynamic(() => import("./sixth-section"));

function Home() {
  return (
    <div className="container mx-auto">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}

export default Home;
