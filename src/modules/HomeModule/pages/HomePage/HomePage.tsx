import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import Navbar from "../../components/navbar/Navbar"
import Product from "../../components/main/product/Product";
import Footer from "../../components/footer/Footer";
import Solution from "../../components/main/solutions/Solutions";
import Learn from "../../components/main/learn/Learn";


export const HomePage = () => {
  const [activeButton, setActiveButton] = useState(1)
  useEffect(() => {
    console.log(activeButton)
  }, [activeButton])
  return (
    <div className="homepage">
      <Navbar activePage={activeButton} setPage={setActiveButton} />
      <main>
        {activeButton === 1 && <Product />}
        {activeButton === 2 && <Solution />}
        {activeButton === 3 && <Learn />}
      </main>
      <Footer />
    </div>
  );
};
