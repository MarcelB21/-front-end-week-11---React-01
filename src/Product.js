import React from 'react'

function Product ({image, title, price, name, category}) {
    return (
        <article>
            <span>{category}</span>
            <img src={image} alt={name}/>
            <p>{title}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;