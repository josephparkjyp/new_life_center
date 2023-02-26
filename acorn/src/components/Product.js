import './Product.css'
import React from 'react'

import raw_noodle from "../images/raw-noodle.png"

function Product(props) {
    return (
        <div className='product-container'>
            <img src={raw_noodle} />
            <h2 className='product-name'>Handmade Acorn Noodles</h2>
            <h2 className='product-name'>(수제 도토리 국수)</h2>
            <p className='product-description'>Korean acorn noodles are a unique type 
                of noodle made from acorn flour, crafted using 
                traditional techniques. These nutty-flavored 
                noodles are chewy and nutritious, being a good 
                source of protein, fiber, and essential minerals. 
                Enjoy them in soups or stir-fries for a tasty 
                and unique addition to any meal.</p>
            <button className='product-button'>Buy Now</button>
            <h3 className='product-additional-info'>Ingredients</h3>
            <p className='product-additional-info-content'>Acorns • Flour • Salt • Sugar</p>
        </div>
    )
}

export default Product