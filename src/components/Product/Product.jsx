import React from 'react';

const Product = ({label, image, imageAlt, nameBag, price}) => {
        console.log(Product)
    return (
        <>
            <article>
                <span>{label}</span>
                <img src={image}
                     alt={imageAlt}
                />
                <p>{nameBag}</p>
                <h4>€{price},-</h4>
            </article>
        </>
    );
};

export default Product;