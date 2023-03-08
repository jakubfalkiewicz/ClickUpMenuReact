import React from 'react'
import "./LearnItem.scss"

interface LearnItemProps {
    icon: string;
    title: string;
    text: string;
}

function LearnItem({ icon, title, text }: LearnItemProps) {
    return (
        <div className={`learn-item ${title.replace(/[^a-zA-Z]/g, '')}`}>
            <img className='icon' alt="learn-icon" src={icon}></img>
            <div className='learn-item-content'>
                <div className='learn-title'>{title}</div>
                <div className='learn-text'>{text}</div>
            </div>
        </div>
    )
}

export default LearnItem