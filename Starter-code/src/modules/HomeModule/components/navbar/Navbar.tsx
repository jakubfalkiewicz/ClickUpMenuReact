import React, { useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import "./Navbar.scss";

function Navbar() {
    const [activeButton, setActiveButton] = useState<number>(1);
    return (
        <nav>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <div className='logo'>ClickUp</div>
                    <div className='tabs-container'>
                        <button className={`tab ${activeButton === 1 ? "active" : ""}`} onClick={() => setActiveButton(1)}><div>Product</div><RiArrowDownSLine className="dropdown" size={20} /></button>
                        <button className={`tab ${activeButton === 2 ? "active" : ""}`} onClick={() => setActiveButton(2)}><div>Solutions</div><RiArrowDownSLine className="dropdown" size={20} /></button>
                        <button className={`tab ${activeButton === 3 ? "active" : ""}`} onClick={() => setActiveButton(3)}><div>Learn</div><RiArrowDownSLine className="dropdown" size={20} /></button>
                        <div className='tab non-dropdown'><div>Pricing</div></div>
                        <div className='tab non-dropdown'><div>Enterprise</div></div>
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
    )
}

export default Navbar