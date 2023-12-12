import React, { useState } from 'react'
import {
    Payment_Visa,
    Payment_mastercard_dark_large,
    Payment_momo,
} from '../../assets/Images'
const Payment_Content = () => {

    return (
        <div class="payment">
            <div class="payment__content">
                <div class="payment__content__left">
                    <h1>Chi tiết giao hàng</h1>
                    <div class="payment__content__left__box">
                        <div class="payment__content__left__box__address">
                            <p class="p1">Địa chỉ giao hàng</p>
                            <p id='address'>Đường số 6, P. Linh Trung, Tp. Thủ Đức, Tp. Hồ Chí Minh, Việt Nam<br />
                                71308 <br />
                                Tp. Thủ Đức <br />
                            </p>
                        </div>
                        <div class="payment__content__left__box__info">
                            <p class="p1">Thông tin liên hệ</p>
                            <p id="email">
                                tueminh35@gmail.com
                            </p>
                        </div>
                        <div class="payment__content__left__box__footer" >
                            <a href="/Delivery">
                                <p>Chỉnh sửa chi tiết</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="payment__content__center">
                    <h1>Hình thức thanh toán</h1>
                    <div class="payment__content__center__content">
                        <div class="box1">
                            <img src={Payment_Visa} alt="" />
                        </div>
                        <div class="box2">
                            <div class="box3">
                                <p class="p2">Thẻ tín dụng/Thẻ ghi nợ</p>
                                <img src={Payment_Visa} alt="" />
                                <img src={Payment_mastercard_dark_large} alt="" />
                                <img src={Payment_momo} alt="" />
                            </div>
                            <table>
                                <tr>
                                    <td colSpan={2}>
                                        <p>Số thẻ</p>
                                        <input type="text" placeholder='XXXX XXXX XXXX XXXX' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Ngày hết hạn</p>
                                        <input type="text" placeholder='XX/XX' />
                                    </td>
                                    <td>
                                        <p>CVC</p>
                                        <input type="text" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <button id="button_payment1">THANH TOÁN NÂNG CAO</button>
                </div>
                <div class="payment__content__right">
                    <div class="payment__content__right__bill">
                        <h1>Hóa đơn</h1>
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
                    </div>
                    <div class="button">
                        <div>
                            <a href="/Payment_Successful">
                                <button >
                                    <p>THANH TOÁN</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment_Content