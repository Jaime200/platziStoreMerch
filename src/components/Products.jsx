import React from 'react'
import Product from './Product'
import '../style/components/Products.css'
const Products = ({ products })=>{
    
    return (
        <div className="Products">
            <div className="Products-items">
                { products.map(product =>{
                    
                    return <Product key={product.id} product={product} />
                }) }
            </div>
        </div>
    )
}

export default Products