import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import productData from '../../assets/Product';
import categoryData from '../../assets/Category';
import Card from './Card';  // Update the import statement to the correct path

const Collections_Content = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const allProducts = productData.getAllProducts();
        setProducts(allProducts);
    }, []);

    return (
        <div className="collections">
            <Filter />
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
                        <Card item={product} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collections_Content;
