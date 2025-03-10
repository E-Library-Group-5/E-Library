import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagesLayouts = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default PagesLayouts;
