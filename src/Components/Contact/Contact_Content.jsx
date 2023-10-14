import React from 'react'
import { LocationIcon, PhoneIcon, CupIcon } from '../Icons'
const Contact_Content = () => {
    return (
        <div className="contact">
            <div class="contact__content__header">
                <h1>Hãy Liên Hệ Với Chúng Tôi</h1>
                <br />
                <p class="grey_text">Để biết thêm thông tin về sản phẩm và dịch vụ của chúng tôi. Xin vui lòng gửi <br /> email cho chúng tôi. Nhân viên của chúng tôi luôn có mặt để giúp đỡ bạn!</p>
            </div>
            <div class="contact__content">

                <div class="contact__content__main">
                    <div class="contact__content__main__left">
                        <div class="contact__content__main__left__block">

                            <p class="contact__content__main__left__text1"><LocationIcon /> Địa chỉ</p>
                            <p>KTX Khu A, Đường số 6, <br /> Phường Linh Trung, Thủ Đức</p>
                        </div>
                        <div class="contact__content__main__left__block">

                            <p class="contact__content__main__left__text1"><PhoneIcon /> Số điện thoại</p>
                            <p>Di động: 0354466237 <br />
                                Đường dây nóng: 0399776527
                            </p>
                        </div>
                        <div class="contact__content__main__left__block">

                            <p class="contact__content__main__left__text1"><CupIcon /> Thời gian làm việc</p>
                            <p>Thứ2-Thứ6: 8:00-22:00 <br />
                                Thứ7-Chủ Nhật: 8:00-21:00
                            </p>
                        </div>
                    </div>
                    <div class="contact__content__main__right">
                        <p>Tên của bạn</p>
                        <input type="text" placeholder='Abc' />
                        <p>Địa chỉ gmail</p>
                        <input type="text" placeholder='Abc@gmail.com' />
                        <p>Chủ đề</p>
                        <input type="text" placeholder='Abc' />
                        <p>Bạn có câu hỏi gì về chủ đề này?</p>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Abc...'></textarea> <br />
                        <div class="button_gui">
                            <button id="button_Gui">Gửi</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact_Content