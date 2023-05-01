import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainBody from "./MainBody";

const HomePage = () => {
  return (
    <div className="bg-blue-300">
      <Nav />
      <MainBody />
      <Footer />
    </div>
  );
};

export default HomePage;
