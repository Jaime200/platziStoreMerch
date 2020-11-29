import React from 'react'


const Product = ({product})=> {
    return (
        <div className="Products-item">
           <img src={product.image} alt={product.title}/> 
           <div className="Product-item-into">
               <h2>
                    {product.title}
               </h2>
                <span>$ {' '}{product.price}</span>
                <p>{product.description}</p>
                <button type="button">Comprar</button>
           </div>
        </div>
    )
}

export default Product