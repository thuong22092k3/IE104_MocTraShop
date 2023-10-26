import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import { Collections1 } from '../../assets/Images'
import Filter from './Filter';

const Collections_Content = () => {
    const [products] = useState([
        {
            name: 'Hồng Trà A',
            image: Collections1,
            price: 1000,
        },
        {
            name: 'Trà Xanh B',
            image: Collections1,
            price: 1500,
        },
        {
            name: 'Hồng Trà C',
            image: Collections1,
            price: 1200,
        },

        {
            name: 'Hồng Trà C',
            image: Collections1,
            price: 1200,
        },

        {
            name: 'Hồng Trà C',
            image: Collections1,
            price: 1200,
        },

        {
            name: 'Hồng Trà C',
            image: Collections1,
            price: 1200,
        },

        {
            name: 'Hồng Trà C',
            image: Collections1,
            price: 1200,
        },

        {
            name: 'Hồng Trà C',
            image: Collections1,
            price: 1200,
        },

        {
            name: 'Hồng Trà C',
            image: Collections1,
            price: 1200,
        },
    ]);
    return (
        <div className="collections">
            <Filter/>
            <div className="collections__products">
                <div className="collections__products__sort">
                    <select>
                        <option value="">SẮP XẾP THEO</option>
                        <option value="alphabetical">TỪ A - Z</option>
                        <option value="alphabetical">TỪ Z - A</option>
                    </select>
                </div>
                <div className="collections__products__list">
                    {products.map((product, index) => (
                        <div key={index} className="product">
                            <Link to={`/product`}>
                                <img src={product.image} alt={product.name} />
                                <div className="product-details">
                                    <div className="product-name">{product.name}</div>
                                    <div className="product-price"><p>đ {product.price}</p> / 50g</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collections_Content