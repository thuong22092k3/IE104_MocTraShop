import React from 'react'
import { Link } from 'react-router-dom';
import { Product_Relative1, Product_Relative2, Product_Relative3 } from '../../assets/Images';

const ProductRelative = () => {
  return (
    <div className="relative">
      <h1 className="relative__h1">
        sản phẩm tương tự
      </h1>
      <div className="relative__list">
        <Link to="/product">
          <div className="relative__list__product">
            <img src={Product_Relative1} alt="" />
            <p>Trà quế gừng Ceylon</p>
            <p> <span>₫1000</span> / 50 g</p>
          </div>
        </Link>

        <Link to="/product">
          <div className="relative__list__product">
            <img src={Product_Relative2} alt="" />
            <p>Trà quế gừng Ceylon</p>
            <p> <span>₫1000</span> / 50 g</p>
          </div>
        </Link>
        <Link to="/product">
          <div className="relative__list__product">
            <img src={Product_Relative3} alt="" />
            <p>Trà quế gừng Ceylon</p>
            <p> <span>₫1000</span> / 50 g</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductRelative