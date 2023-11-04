import React from 'react'
const Account_Content = () => {
    return (
        <div class="account">
            <div class="account__content" >
                <div class="account__content__left">
                    <div class="account__content__left__form">
                        <div class="account__content__left__form__box1">
                            <h1>Đã là khách hàng?</h1>
                            <p>Chào mừng trở lại! Đăng nhập để thanh toán nhanh hơn</p>
                        </div>
                        <div class="account__content__left__form__box">
                            <input type="text" placeholder='Địa chỉ Email' />
                        </div>
                        <div class="account__content__left__form__box">
                            <input type="text" placeholder='Nhập mật khẩu' />
                        </div>
                        <div class="account__content__left__form__box2">
                            <div>
                                <input type="checkbox" /> Nhớ tài khoản
                            </div>
                            <a href="">Quên mật khẩu?</a>

                        </div>
                        <div class="account__content__left__form__box">
                            <div class="button_dangnhap">
                                <button id="button_dangnhap">ĐĂNG NHẬP</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="account__content__right" >
                    <div class="account__content__right__signup">
                        <div class="account__content__right__signup__head">
                            <h1>Bạn chưa có tài khoản?</h1>
                            <p>Tạo tài khoản để có trải nhiệm tốt nhất</p>
                        </div>
                        <div class="account__content__right__signup__list" >
                            <ul type="none">
                                <li><strong>&gt;</strong>&emsp;Sửa đổi và theo dõi đơn đặt hàng của bạn</li>
                                <li><strong>&gt;</strong>&emsp;Thanh toán nhanh hơn</li>
                                <li><strong>&gt;</strong>&emsp;Nhận giảm giá 10% cho khách hàng mới</li>
                            </ul>
                        </div>
                        <div class="account__content__right__signup__button">
                            <a href="/Signup">
                                <button>TẠO TÀI KHOẢN</button>
                            </a>
                        </div>
                    </div>
                    <div class="account__content__right__pay">
                        <div class="account__content__right__pay__head">
                            <h1>Khách hàng thanh toán</h1>
                            <p>Chưa sẵn sàng để trở thành khách hàng?</p>
                        </div>
                        <div class="account__content__right__pay__button">
                            <div>
                                <button>THANH TOÁN VỚI TƯ CÁCH KHÁCH HÀNG</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="account__content__bottom"></div>
            </div>
        </div>
    )
}
export default Account_Content