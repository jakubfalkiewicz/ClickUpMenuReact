import React from "react";
import "./HomePage.scss";
import Navbar from "../../components/navbar/Navbar"
import Product from "../../components/main/product/Product";
import Footer from "../../components/footer/Footer";

export const HomePage = () => {

  return (
    <div className="homepage">
      <Navbar />
      <main>
        <Product />
      </main>
      <Footer />
    </div>
  );
};
