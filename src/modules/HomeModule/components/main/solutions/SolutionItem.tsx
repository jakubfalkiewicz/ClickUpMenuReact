import React from 'react'
import "./SolutionItem.scss"

interface SolutionItemProps {
    icon: string;
    title: string;
    text: string;
}

function SolutionItem({ icon, title, text }: SolutionItemProps) {
    return (
        <div className="solution-item">
            <img className='icon' alt="solution-icon" src={icon}></img>
            <div className='solution-item-content'>
                <div className='solution-title'>{title}</div>
                <div className='solution-text'>{text}</div>
            </div>
        </div>
    )
}

export default SolutionItem