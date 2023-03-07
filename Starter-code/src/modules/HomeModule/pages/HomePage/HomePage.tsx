import React from "react";
import "./HomePage.scss";
import Navbar from "../../components/navbar/Navbar"
import Product from "../../components/main/Product";

export const HomePage = () => {

  return (
    <div className="homepage">
      <Navbar />
      <main>
        <Product />
      </main>
      <footer>

      </footer>
    </div>
  );
};
