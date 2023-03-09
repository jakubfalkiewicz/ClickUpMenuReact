import React from 'react'
import "./SidebarSolutions.scss"
import SidebarRow from '../SidebarRow'
import {
    arrowPink, engineeringIcon, productIcon, marketingIcon, designIcon, humanResourcesIcon, operationsIcon
} from '@/assets'

function SidebarSolutions() {
    return (
        <div className='sidebar-component-menu-table'>
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
            <div className='table-2'>PLATFORM</div>
            {/* <SidebarRow text="Templates" src={templatesIcon} />
            <SidebarRow text="ClickApps" src={clickAppsIcon} />
            <SidebarRow text="Integrations" src={integrationsIcon} />
            <SidebarRow text="Views" src={viewsIcon} />
            <SidebarRow text="Hierarchy" src={hierarchyIcon} />
            <SidebarRow text="Automations" src={automationsIcon} /> */}
        </div>
    )
}

export default SidebarSolutions