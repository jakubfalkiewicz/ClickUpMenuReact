import React from 'react'
import "./SidebarRow.scss"

interface SidebarRowInterface {
    text: string,
    src: string
}

function SidebarRow({ text, src }: SidebarRowInterface) {
    return (
        <div className={`sidebar-component-table-row ${text.replace(/[^a-zA-Z]/g, '')}`}>
            <img src={src}></img>
            <div>{text}</div>
        </div>
    )
}

export default SidebarRow