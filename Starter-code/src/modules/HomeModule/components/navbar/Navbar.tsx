import React, { useState } from 'react'
import "./Navbar.scss";
import { dropdown, menuBurgerIcon } from "@/assets"
import Sidebar from './Sidebar';

interface NavbarProps {
    activePage: number,
    setPage: (page: number) => void
}


function Navbar({ activePage, setPage }: NavbarProps) {
    const [activeButton, setActiveButton] = useState<number>(activePage);
    const [activeSidebar, setActiveSidebar] = useState<boolean>(false)

    function handlePageChange(page: number) {
        setActiveButton(page)
        setPage(page)
    }

    return (
        <nav>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <div className='logo'>ClickUp</div>
                    <div className='tabs-container'>
                        <button className={`tab ${activeButton === 1 ? "active" : ""}`} onClick={() => handlePageChange(1)}><div>Product</div><img src={dropdown} alt="dropdown"></img></button>
                        <button className={`tab ${activeButton === 2 ? "active" : ""}`} onClick={() => handlePageChange(2)}><div>Solutions</div><img src={dropdown} alt="dropdown"></img></button>
                        <button className={`tab ${activeButton === 3 ? "active" : ""}`} onClick={() => handlePageChange(3)}><div>Learn</div><img src={dropdown} alt="dropdown"></img></button>
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
                    <img src={menuBurgerIcon} alt="menu-burger" onClick={() => setActiveSidebar(!activeSidebar)}></img>
                </div>
                {activeSidebar && <Sidebar setActive={setActiveSidebar} />}
            </div>
        </nav>
    )
}

export default Navbar