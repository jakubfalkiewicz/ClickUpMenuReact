import React from "react";
import "./HomePage.scss";
import { RiArrowDownSLine } from "react-icons/ri";


export const HomePage = () => {


  return (
    <div className="homepage">
      <nav>
        <div className='navbar-container'>
          <div className='navbar-left'>
            <div className='logo'>ClickUp</div>
            <div className='tabs-container'>
              <div className='tab'><div>Product</div><RiArrowDownSLine size={20} /></div>
              <div className='tab'><div>Solutions</div><RiArrowDownSLine size={20} /></div>
              <div className='tab'><div>Learn</div><RiArrowDownSLine size={20} /></div>
              <div className='tab'><div>Pricing</div></div>
              <div className='tab'><div>Enterprise</div></div>
            </div>
          </div>
          <div className='navbar-right'>
            <div className="contact">Contact Sales</div>
            <div className="sign-buttons">
              <button className="sign-up-button">Sign Up</button>
              <button className="log-in-button">Log In</button>
            </div>
          </div>
        </div>
      </nav>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
};
