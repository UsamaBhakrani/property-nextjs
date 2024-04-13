import Link from "next/link";
import React from "react";
import "@/assets/styles/globals.css";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href={`/properties`}>Properties</Link>
    </div>
  );
};

export default HomePage;
