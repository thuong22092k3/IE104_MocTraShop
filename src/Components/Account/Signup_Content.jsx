import React from 'react'
const Signup_Content = () => {
    return (
        <div class="signup" >
            <div class="signup__content">
                <div class="signup__content__box">
                    <h1>ĐĂNG KÝ</h1>
                </div>
                <div class="signup__content__box">
                    <input type="text" placeholder='Họ và tên' />
                </div>
                <div class="signup__content__box">
                    <input type="text" placeholder='Số điện thoại' />
                </div>
                <div class="signup__content__box">
                    <input type="text" placeholder='Địa chỉ Email' />
                </div>
                <div class="signup__content__box">
                    <input type="text" placeholder='Nhập mật khẩu' />
                </div>
                <div class="signup__content__box">
                    <input type="text" placeholder='Xác nhận lại mật khẩu' />
                </div>
                <div class="signup__content__box1">
                    <button>ĐĂNG KÝ</button>
                </div>
                <div class="signup__content__box">
                    <p>Bạn đã có tài khoản? Đăng nhập <a href="/Account">tại đây</a></p>
                </div>
            </div>
        </div>
    )
}
export default Signup_Content