import Link from "next/link";
import React from "react";
import "@/assets/styles/globals.css";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
};

export default HomePage;
