import React from 'react'
import "./Product.scss"
import {
    tasksIcon, docsIcon, goalsIcon, whiteboardsIcon, dashboardsIcon, chatIcon, arrow,
    templatesIcon, clickAppsIcon, integrationsIcon, viewsIcon, hierarchyIcon, automationsIcon
} from '@/assets'
import ProductItem from './ProductItem'


function Product() {
    return (
        <div className='product-component'>
            <div className='product-tab'>
                <div className='product-type'>PRODUCT</div>
                <div className='product-items'>
                    <ProductItem icon={tasksIcon} title="Tasks" text="Break down any size project into customized tasks." />
                    <ProductItem icon={docsIcon} title="Docs" text="Create beautiful dosc and connect them to tasks." />
                    <ProductItem icon={goalsIcon} title="Goals" text="Track work against strategy with measurable targets." />
                    <ProductItem icon={whiteboardsIcon} title="Whiteboards" text="Bring team ideas to life with visual collaboration." />
                    <ProductItem icon={dashboardsIcon} title="Dashboards" text="Visualize progress with real- time reporting." />
                    <ProductItem icon={chatIcon} title="Chat" text="Colaborate with your team in real-time." />
                </div>
                <button className='see-all-button'><div>See All Features</div><img src={arrow}></img></button>
            </div>
            <div className='platform-tab'>
                <div className='product-type'>PLATFORM</div>
                <div className='product-items'>
                    <ProductItem icon={templatesIcon} title="Templates" text="Save time on project prep with a custom template." />
                    <ProductItem icon={clickAppsIcon} title="ClickApps" text="Add even more custom tools to your workflow." />
                    <ProductItem icon={integrationsIcon} title="Integrations" text="Connect your favourite apps to your workflow." />
                    <ProductItem icon={viewsIcon} title="Views" text="View your work in the way that works best for you." />
                    <ProductItem icon={hierarchyIcon} title="Hierarchy" text="See the big picture without missing the details." />
                    <ProductItem icon={automationsIcon} title="Automations" text="Put your routine busywork on autopilot." />
                </div>
            </div>
        </div>
    )
}

export default Product