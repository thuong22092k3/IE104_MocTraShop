import React from 'react'

const Contact_Content = () => {
    return (
        <div className="contact">
            <div class="contact__content__header">
                <h1>Hãy Liên Hệ Với Chúng Tôi</h1>
                <p>Để biết thêm thông tin về sản phẩm và dịch vụ của chúng tôi. Xin vui lòng gửi <br /> email cho chúng tôi. Nhân viên của chúng tôi luôn có mặt để giúp đỡ bạn!</p>
            </div>
            <div class="contact__content">

                <div class="contact__content__main">
                    <div class="contact__content__left">
                        <div>
                            <h2>Địa chỉ</h2>
                            <p>KTX Khu A, Đường số 6, <br /> Phường Linh Trung, Thủ Đức</p>
                        </div>
                        <div>
                            <h2>Số điện thoại</h2>
                            <p>Di động: <br />
                                Đường dây nóng:
                            </p>
                        </div>
                        <div>
                            <h2>Thời gian làm việc</h2>
                            <p>Thứ2-Thứ6: 8:00-22:00 <br />
                                Thứ7-Chủ Nhật: 8:00-21:00
                            </p>
                        </div>
                    </div>
                    <div class="contact__content__right">
                        <p>Tên của bạn</p>
                        <input type="text" placeholder='Nguyễn Văn A' />
                        <p>Địa chỉ gmail</p>
                        <input type="text" placeholder='Abc@gmail.com' />
                        <p>Chủ đề</p>
                        <input type="text" />
                        <p>Bạn có câu hỏi gì về chủ đề này?</p>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Abc...'></textarea> <br />
                        <div class="button">
                            <button id="button_Gui">Gửi</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact_Content