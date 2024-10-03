import React from "react";
import FirstSection from "./first-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";

function Home() {
  return (
    <div className="container mx-auto">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default Home;
