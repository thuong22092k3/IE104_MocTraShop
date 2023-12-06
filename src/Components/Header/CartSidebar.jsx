import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    CartSidebar_1
} from '../../assets/Images'

const CartSidebar = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className="cartSidebar">
            <h1>GIỎ HÀNG</h1>
            <div className="cartSidebar__products">
                <div className="cartSidebar__products__product">
                    <img src={CartSidebar_1} alt="" />
                    <div className="cartSidebar__products__product__detail">
                        <p>Trà quế gừng Ceylon - 50 g</p>
                        <button> <span className="span_500">XÓA</span></button>
                    </div>
                    <div className="cartSidebar__products__product__quantity">
                        <div className="sale__info__components__quantity">
                            <span className="sale__info__components__quantity__minus" onClick={handleDecrement}>-</span>
                            <span className="sale__info__components__quantity__number">{quantity}</span>
                            <span className="sale__info__components__quantity__plus" onClick={handleIncrement}>+</span>
                        </div>
                        <p><span className="span_500">₫{1000*quantity}.000</span></p>
                    </div>

                </div>
            </div>
            <div className="cartSidebar__total">
                <hr />
                <div className="cartSidebar__total__payment">
                    <p>Tổng tiền</p>
                    <p> ₫{1000*quantity}000</p>
                </div>
                <div className="cartSidebar__total__payment">
                    <p>Giao hàng</p>
                    <p> ₫30.000</p>
                </div>
                <hr />
                <div className="cartSidebar__total__payment">
                    <p>Thành tiền</p>
                    <p> ₫{1000*quantity+30000}.000</p>
                </div>
                <Link to="/Delivery">
                    <button className="cartSidebar__total__button">
                        <p>mua hàng</p>
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default CartSidebar