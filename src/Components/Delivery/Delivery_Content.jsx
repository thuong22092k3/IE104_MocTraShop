import React, { useState } from 'react'
import { ArrowRightIcon } from '../Icons';
const Delivery_Content = () => {

    return (
        <div class="delivery">
            <div class="delivery__content">
                <div class="delivery__content__left">
                    <h1>Địa chỉ giao hàng</h1>
                    <div class="delivery__content__left__box1">
                        <input type="text" placeholder='Họ và tên' />
                    </div>
                    <div class="delivery__content__left__box1">
                        <input type="text" placeholder='Số điện thoại' />
                    </div>
                    <div class="delivery__content__left__box1">
                        <input type="text" placeholder='Địa chỉ email' />
                    </div>
                    <div class="delivery__content__left__box1">
                        <input type="text" placeholder='Tên đường' />
                    </div>
                    <div class="delivery__content__left__box2">
                        <input type="text" placeholder='Mã bưu điện' />
                        <input type="text" placeholder='Thành phố' />
                    </div>
                </div>
                <div class="delivery__content__right">
                    <div className="delivery__content__right__bill">
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
                            <p className="delivery__content__right__bill__p">Thời gian vận chuyển ước tính: 2 ngày</p>
                            <div class="button">
                                <div>
                                    <a href="/Payment">
                                        <button >
                                            <p>ĐI ĐẾN THANH TOÁN</p>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="delivery__content__bottom"></div>
            </div>
        </div>
    )
}
export default Delivery_Content