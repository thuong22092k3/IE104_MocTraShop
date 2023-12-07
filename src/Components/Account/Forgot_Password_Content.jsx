import React from 'react'
import { EmailIcon } from '../Icons'
const Forgot_Password_Content = () => {
    return (
        <div class="forgotpassword">
            <div class="forgotpassword__content">
                <h1>Quên mật khẩu?</h1>
                <p>Vui lòng nhập địa chỉ email của bạn <br />
                    Bạn sẽ nhận được liên kết tạo mật khẩu mới qua email.</p>
                <div class="email">
                    <i><EmailIcon /></i>
                    <input type="text" placeholder='Địa chỉ Email' /> <br />
                </div>
                <button>ĐẶT LẠI MẬT KHẨU</button>
            </div>
        </div>
    )
}
export default Forgot_Password_Content