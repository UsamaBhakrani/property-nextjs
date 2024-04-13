import Footer from "@/components/Footer";
import "../assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default HomeLayout;
