import React from 'react'
import "./ProductItem.scss"

interface ProductItemProps {
    icon: string;
    title: string;
    text: string;
}

function ProductItem({ icon, title, text }: ProductItemProps) {
    return (
        <div className='product-item'>
            <img className='icon' alt="product-icon" src={icon}></img>
            <div className='product-item-content'>
                <div className='product-title'>{title}</div>
                <div className='product-text'>{text}</div>
            </div>
        </div>
    )
}

export default ProductItem