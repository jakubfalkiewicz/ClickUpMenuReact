import React from 'react'
import "./Learn.scss"
import {
    gettingStartedIcon,
    clickUpUniversityIcon,
    demosIcon,
    importIcon,
    customersIcon,
    helpDocsIcon,
    professionalServicesIcon,
    verifiedConsultantsIcon,
    arrow
} from '@/assets'
import LearnItem from './LearnItem'


function Learn() {
    return (
        <div className='learn-component'>
            <div className='learn-tab'>
                <div className='learn-type'><div>LEARN</div><div className='learn-type-price free'>FREE</div></div>
                <div className='learn-items'>
                    <LearnItem icon={gettingStartedIcon} title="Getting Started" text="All the tools you need to get started in ClickUp." />
                    <LearnItem icon={clickUpUniversityIcon} title="ClickUp University" text="Master productivity with interactive ClickUp courses." />
                    <LearnItem icon={demosIcon} title="Demos" text="Watch quick videos to learn basics of ClickUp." />
                    <LearnItem icon={importIcon} title="Import" text="Bring all other work into ClickUp in one easy import." />
                    <LearnItem icon={customersIcon} title="Customers" text="See why ClickUp means success for our clients." />
                    <LearnItem icon={helpDocsIcon} title="Help Docs" text="Find simple answers to questions about ClickUp." />
                </div>
                <div className='learn-type'><div>PREMIUM SUPPORT</div><div className='learn-type-price paid'>PAID</div></div>
                <div className='learn-items-2'>
                    <LearnItem icon={professionalServicesIcon} title="Professional Services" text="Get premium support and hands-on help from our Professional Services Team." />
                    <LearnItem icon={verifiedConsultantsIcon} title="100+ Verified Third-Party Consultants" text="Hire a verred third-party ClickUp expert to help you with training. Workspace setup, workflows and more." />
                </div>
            </div>
            <div className='platform-tab'>
                <div className='learn-type'>
                    <div>LATEST FROM BLOG</div>
                    <div className='learn-type-show-more'>
                        <div>See All</div>
                        <img src={arrow}></img>
                    </div>
                </div>
                <div className='learn-latest'>
                    <div className='learn-latest-box'>
                        <div className='learn-latest-thumbnail'></div>
                        <div className='learn-latest-text'>10 Best Google Docs Alternatives & Competitors 2023</div>
                    </div>
                    <div className='learn-latest-box'>
                        <div className='learn-latest-thumbnail'></div>
                        <div className='learn-latest-text'>10 Best Resource Management Tools & Software 2023</div>
                    </div>
                    <div className='learn-latest-box'>
                        <div className='learn-latest-thumbnail'></div>
                        <div className='learn-latest-text'>Best 10 Free Microsoft Word Alternatives 2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learn