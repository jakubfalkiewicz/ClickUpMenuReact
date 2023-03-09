import React, { useState } from 'react'
import './Sidebar.scss'
import { disableIcon, dropdown } from '@/assets'
import SidebarProduct from './product/SidebarProduct'
import SidebarSolutions from './solutions/SidebarSolutions'
import SidebarLearn from './learn/SidebarLearn'

interface SidebarProps {
    setActive: (active: boolean) => void
}

function Sidebar({ setActive }: SidebarProps) {
    const [showProduct, setShowProduct] = useState<boolean>(false)
    const [showSolutions, setShowSolutions] = useState<boolean>(false)
    const [showLearn, setShowLearn] = useState<boolean>(false)

    return (
        <div className='sidebar-component'>
            <div className='background'></div>
            <div className='disable-box' ><img onClick={() => setActive(false)} src={disableIcon}></img></div>
            <div className='sidebar-component-menu'>
                <div className={`sidebar-component-menu-row ${showProduct ? 'active' : ''}`} onClick={() => setShowProduct(!showProduct)}>
                    <div className='sidebar-component-menu-item'>
                        Product
                    </div>
                    <img src={dropdown}>
                    </img>
                </div>
                {showProduct && <SidebarProduct />}
                <div className={`sidebar-component-menu-row ${showSolutions ? 'active' : ''}`} onClick={() => setShowSolutions(!showSolutions)}>
                    <div className='sidebar-component-menu-item'>
                        Solutions
                    </div>
                    <img src={dropdown}>
                    </img>
                </div>
                {showSolutions && <SidebarSolutions />}
                <div className={`sidebar-component-menu-row ${showLearn ? 'active' : ''}`} onClick={() => setShowLearn(!showLearn)}>
                    <div className='sidebar-component-menu-item'>
                        Learn
                    </div>
                    <img src={dropdown}>
                    </img>
                </div>
                {showLearn && <SidebarLearn />}
                <div className='sidebar-component-menu-row'>
                    <div className='sidebar-component-menu-item'>
                        Pricing
                    </div>
                </div>
                <div className='sidebar-component-menu-row'>
                    <div className='sidebar-component-menu-item'>
                        Enterprise
                    </div>
                </div>
            </div>
            <div className="sign-buttons">
                <button className="sign-up-button">Sign Up</button>
                <button className="log-in-button">Log In</button>
            </div>
        </div>
    )
}

export default Sidebar