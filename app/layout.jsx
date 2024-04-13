import "../assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default HomeLayout;
