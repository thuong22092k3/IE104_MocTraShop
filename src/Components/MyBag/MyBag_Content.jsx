import React, { useState } from 'react'
import {
    CartSidebar_1,
    CartSidebar_2,
    CartSidebar_3,
    Payment_Visa,
    Payment_advance,
    Payment_maestro_dark_large,
    Payment_mastercard_dark_large,
    Payment_momo,
} from '../../assets/Images'

import { ArrowRightIcon } from '../Icons';

const MyBag_Content = () => {
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
        <div class="mybag">
            <div class="mybag__content">
                <div class="mybag__content__left">
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
                                <p><span className="span_500">₫1000</span></p>
                            </div>

                        </div>
                        <div className="cartSidebar__products__product">
                            <img src={CartSidebar_2} alt="" />
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
                                <p><span className="span_500">₫1000</span></p>
                            </div>

                        </div>
                        <div className="cartSidebar__products__product">
                            <img src={CartSidebar_3} alt="" />
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
                                <p><span className="span_500">₫1000</span></p>
                            </div>

                        </div>
                    </div>
                    <div className="cartSidebar__total">
                        <hr />
                        <div className="cartSidebar__total__payment">
                            <p>Tổng</p>
                            <p> ₫2000</p>
                        </div>
                        <button className="cartSidebar__total__button">
                            <p>mua hàng</p>
                        </button>
                    </div>
                </div>
                <div class="mybag__content__right">
                    <div className="mybag__content__right__bill">
                        <h1>Hóa đơn</h1>
                        <div className="cartSidebar__total">
                            <div className="cartSidebar__total__payment">
                                <p>Tổng tiền</p>
                                <p> ₫1000</p>
                            </div>
                            <div className="cartSidebar__total__payment">
                                <p>Giao hàng</p>
                                <p> ₫1000</p>
                            </div>
                            <hr />
                            <div className="cartSidebar__total__payment">
                                <p>Thành tiền</p>
                                <p> ₫2000</p>
                            </div>
                            <p className="mybag__content__right__bill__p">Thời gian vận chuyển ước tính: 2 ngày</p>
                            <button className="cartSidebar__total__button">
                                <p>thanh toán</p>
                            </button>
                        </div>
                    </div>

                    <div className="mybag__content__right__payment">
                        <h1>Phương thức thanh toán</h1>
                        <div className="mybag__content__right__payment__method">
                            <img src={Payment_Visa} alt="" />
                            <img src={Payment_mastercard_dark_large} alt="" />
                            <img src={Payment_maestro_dark_large} alt="" />
                            <img src={Payment_momo} alt="" />
                            <img src={Payment_advance} alt="" />
                        </div>

                    </div>
                    <div className="mybag__content__right__delivery">
                        <h1>Giao hàng và trả lại hàng</h1>
                        <div className="mybag__content__right__delivery__rule">
                            <ArrowRightIcon />
                            <p>Đặt hàng trước 12h và chúng tôi sẽ giao hàng ngay trong ngày.</p>
                        </div>
                        <div className="mybag__content__right__delivery__rule">
                            <ArrowRightIcon />
                            <p>Các đơn đặt hàng được thực hiện sau 12:00 Thứ Sáu sẽ được xử lý vào Thứ Hai.</p>
                        </div>
                        <div className="mybag__content__right__delivery__rule">
                            <ArrowRightIcon />
                            <p>Để trả lại hàng của bạn, xin vui lòng liên hệ với chúng tôi trước.</p>
                        </div>
                        <div className="mybag__content__right__delivery__rule">
                            <ArrowRightIcon />
                            <p>Phí giao hàng cho việc quay lại không được hoàn trả.
</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyBag_Content