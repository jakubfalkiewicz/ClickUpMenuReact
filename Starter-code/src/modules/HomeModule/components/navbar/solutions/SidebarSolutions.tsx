import React from 'react'
import "./SidebarSolutions.scss"
import SidebarRow from '../SidebarRow'
import {
    arrowPink, engineeringIcon, productIcon, marketingIcon, designIcon, humanResourcesIcon, operationsIcon,
    projectManagementIcon, remoteWorkIcon, crmIcon, enterpriceIcon, startupIcon, nonProfitIcon
} from '@/assets'

function SidebarSolutions() {
    return (
        <div className='sidebar-component-menu-solutions'>
            <SidebarRow text="Engineering" src={engineeringIcon} />
            <SidebarRow text="Product" src={productIcon} />
            <SidebarRow text="Marketing" src={marketingIcon} />
            <SidebarRow text="Design" src={designIcon} />
            <SidebarRow text="HumanResources" src={humanResourcesIcon} />
            <SidebarRow text="Operations" src={operationsIcon} />
            <button className='see-all-button'>
                <div>See All Features</div>
                <img src={arrowPink}></img>
            </button>
            <div className='table-2'>USE CASE</div>
            <SidebarRow text="Project Management" src={projectManagementIcon} />
            <SidebarRow text="Remote Work" src={remoteWorkIcon} />
            <SidebarRow text="CRM" src={crmIcon} />
            <div className='table-2'>TYPE</div>
            <SidebarRow text="Enterprice" src={enterpriceIcon} />
            <SidebarRow text="Startup" src={startupIcon} />
            <SidebarRow text="Non-Profit" src={nonProfitIcon} />
        </div>
    )
}

export default SidebarSolutions