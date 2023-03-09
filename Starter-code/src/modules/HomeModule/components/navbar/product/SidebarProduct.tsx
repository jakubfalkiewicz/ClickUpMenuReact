import React from 'react'
import "./SidebarProduct.scss"
import SidebarRow from '../SidebarRow'
import {
    tasksIcon, docsIcon, goalsIcon, whiteboardsIcon, dashboardsIcon, chatIcon, arrow, templatesIcon, clickAppsIcon, integrationsIcon,
    viewsIcon, hierarchyIcon, automationsIcon
} from '@/assets'

function SidebarProduct() {
    return (
        <div className='sidebar-component-menu-table'>
            <SidebarRow text="Tasks" src={tasksIcon} />
            <SidebarRow text="Docs" src={docsIcon} />
            <SidebarRow text="Goals" src={goalsIcon} />
            <SidebarRow text="Whiteboards" src={whiteboardsIcon} />
            <SidebarRow text="Dashboards" src={dashboardsIcon} />
            <SidebarRow text="Chat" src={chatIcon} />
            <button className='see-all-button'>
                <div>See All Features</div>
                <img src={arrow}></img>
            </button>
            <div className='table-2'>PLATFORM</div>
            <SidebarRow text="Templates" src={templatesIcon} />
            <SidebarRow text="ClickApps" src={clickAppsIcon} />
            <SidebarRow text="Integrations" src={integrationsIcon} />
            <SidebarRow text="Views" src={viewsIcon} />
            <SidebarRow text="Hierarchy" src={hierarchyIcon} />
            <SidebarRow text="Automations" src={automationsIcon} />
        </div>
    )
}

export default SidebarProduct