import React from 'react'
import "./Solutions.scss"
import {
    engineeringIcon,
    productIcon,
    marketingIcon,
    designIcon,
    humanResourcesIcon,
    operationsIcon, arrowPink,
    projectManagementIcon,
    remoteWorkIcon,
    crmIcon,
    enterpriceIcon,
    startupIcon,
    nonProfitIcon
} from '@/assets'
import SolutionItem from './SolutionItem'


function Solution() {
    return (
        <div className='solution-component'>
            <div className='team-tab'>
                <div className='solution-type'>PRODUCT</div>
                <div className='solution-items'>
                    <SolutionItem icon={engineeringIcon} title="Engineering" text="Organize roadmaps, sprints,backlogs and more." />
                    <SolutionItem icon={productIcon} title="Product" text="Manage product roadmaps from ideation to release." />
                    <SolutionItem icon={marketingIcon} title="Marketing" text="Collaborate on campaigns, clients, content and more." />
                    <SolutionItem icon={designIcon} title="Design" text="Streamline workflows, files and feedback." />
                    <SolutionItem icon={humanResourcesIcon} title="Human Resources" text="Manage, train and nurture your talent in one place." />
                    <SolutionItem icon={operationsIcon} title="Operations" text="Streamline workflows to increase business efficiency." />
                </div>
                <button className='see-all-button'><div>See All Features</div><img src={arrowPink}></img></button>
            </div>
            <div className='use-case-tab'>
                <div className='solution-type'>USE CASE</div>
                <div className='solution-items'>
                    <SolutionItem icon={projectManagementIcon} title="Project Management" text="Manage and track projects of any type and size." />
                    <SolutionItem icon={remoteWorkIcon} title="Remote Work" text="Stay on the same page even if you’re not in the room." />
                    <SolutionItem icon={crmIcon} title="CRM" text="All your clients and their info in one place." />
                </div>
            </div>
            <div className='type-tab'>
                <div className='solution-type'>TYPE</div>
                <div className='solution-items'>
                    <SolutionItem icon={enterpriceIcon} title="Templates" text="Align your organization toward company-wide goals." />
                    <SolutionItem icon={startupIcon} title="ClickApps" text="Iterate quickly with a system that scales as you grow." />
                    <SolutionItem icon={nonProfitIcon} title="Integrations" text="Save time working, spend more time saving the word." />
                </div>
            </div>
        </div>
    )
}

export default Solution