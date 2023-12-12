import React from 'react';
import { Link } from 'react-router-dom';
import categoryData from '../../assets/Category';

const CatergoryList = () => {
    const allCategories = categoryData.getAllCategory();

    const rows = [];
    for (let i = 0; i < allCategories.length; i += 4) {
        rows.push(allCategories.slice(i, i + 4));
    }

    return (
        <div className="cards">
            <h1 className="partner__h1">BỘ SƯU TẬP</h1>
            {rows.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((category) => (
                        <Link to={`/collections/${category.categorySlug}`} key={category.id}>
                            <div className="card">
                                <img src={category.image} alt={category?.display} />
                                <div className='card__title'>{category?.display}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CatergoryList;
