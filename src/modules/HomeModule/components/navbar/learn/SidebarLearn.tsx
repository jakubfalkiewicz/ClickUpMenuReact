import React from 'react'
import "./SidebarLearn.scss"
import SidebarRow from '../SidebarRow'
import {
    gettingStartedIcon, clickUpUniversityIcon, demosIcon, importIcon, customersIcon, helpDocsIcon,
    professionalServicesIcon, verifiedConsultantsIcon, arrow
} from '@/assets'

function SidebarLearn() {
    return (
        <div className='sidebar-component-menu-learn'>
            <SidebarRow text="GettingStarted" src={gettingStartedIcon} />
            <SidebarRow text="ClickUp University" src={clickUpUniversityIcon} />
            <SidebarRow text="Demos" src={demosIcon} />
            <SidebarRow text="Import" src={importIcon} />
            <SidebarRow text="Customers" src={customersIcon} />
            <SidebarRow text="Help Docs" src={helpDocsIcon} />
            <div className='table-2'>PREMIUM SUPPORT</div>
            <SidebarRow text="Professional Services" src={professionalServicesIcon} />
            <SidebarRow text="100+ Verified Third-Party Consultants" src={verifiedConsultantsIcon} />
            <div className='table-3'>
                <div>LATEST FROM BLOG</div>
                <div className='table-3-see-all'>
                    <div>See All</div>
                    <img src={arrow}></img>
                </div>
            </div>
            <div className='sidebar-component-menu-learn-latest'>
                <div className='sidebar-component-menu-learn-thumbnail'></div>
                <div className='sidebar-component-menu-learn-text'>10 Best Google Docs Alternatives & Competitors 2023</div>
            </div>
            <div className='sidebar-component-menu-learn-latest'>
                <div className='sidebar-component-menu-learn-thumbnail'></div>
                <div className='sidebar-component-menu-learn-text'>10 Best Resource Management Tools & Software 2023</div>
            </div>
            <div className='sidebar-component-menu-learn-latest'>
                <div className='sidebar-component-menu-learn-thumbnail'></div>
                <div className='sidebar-component-menu-learn-text'>Best 10 Free Microsoft Word Alternatives 2023</div>
            </div>
        </div>
    )
}

export default SidebarLearn