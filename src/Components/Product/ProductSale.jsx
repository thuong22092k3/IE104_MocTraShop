import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Product_Sale1,
    Bag_50g, Bag_100g,
    Bag_170g, Bag_250g,
    Bag_1kg,
    Bag_Sample
} from '../../assets/Images'
import { LanguageIcon, RedeemIcon, EcoIcon, BagIcon } from '../Icons/index'
import CartSidebar from '../Header/CartSidebar';

const ProductSale = () => {
    const [quantity, setQuantity] = useState(1);
    const [isCartVisible, setCartVisible] = useState(false);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        setCartVisible(true);
    };


    const handleOverlayClick = () => {
        setCartVisible(false);
    };

    const handleCartSidebarClick = (e) => {
        e.stopPropagation(); 
    };

    return (
        <div>
            <div className="sale">
                <div><img src={Product_Sale1} alt="" /></div>
                <div className="sale__info">
                    <h1>Trà quế gừng Ceylon</h1>
                    <h4 className="sale__info__p">Trà Chai ấp áp với hương vị quế gừng.</h4>
                    <div className="sale__info__origin">
                        <div className="sale__info__origin__content">
                            <LanguageIcon />
                            <p>Xuất xứ: Iran</p>
                        </div>
                        <div className="sale__info__origin__content">
                            <RedeemIcon />
                            <p>Hữu cơ</p>
                        </div>
                        <div className="sale__info__origin__content">
                            <EcoIcon />
                            <p>Thuần chay</p>
                        </div>
                    </div>
                    <h1> ₫1000</h1>
                    <p className="sale__info__p">Phân loại</p>
                    <div className="sale__info__classify">

                        <img src={Bag_50g} alt="" />
                        <img src={Bag_100g} alt="" />
                        <img src={Bag_170g} alt="" />
                        <img src={Bag_250g} alt="" />
                        <img src={Bag_1kg} alt="" />
                        <img src={Bag_Sample} alt="" />
                    </div>
                    <div className="sale__info__components">
                        <div className="sale__info__components__quantity">
                            <span className="sale__info__components__quantity__minus" onClick={handleDecrement}>-</span>
                            <span className="sale__info__components__quantity__number">{quantity}</span>
                            <span className="sale__info__components__quantity__plus" onClick={handleIncrement}>+</span>
                        </div>
                        <button className="sale__info__components__button" onClick={handleAddToCart}>
                            <BagIcon />
                            <p>Thêm vào giỏ hàng</p>
                        </button>

                    </div>
                </div>

            </div>

            {isCartVisible && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <div className="cart-sidebar-wrapper" onClick={handleCartSidebarClick}>
                        <CartSidebar />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductSale