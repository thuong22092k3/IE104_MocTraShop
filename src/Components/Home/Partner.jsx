import React from 'react'
import {Landing_Second_Image} from '../../assets/Images'

const Partner = () => {
    return (
        <div className="partner">
            <div className="container">
                <h1 class="partner__h1">TRỞ THÀNH ĐỐI TÁC</h1>
                <p class="landingPage__p">Chúng tôi cung cấp trà khô có chất lượng
                    tốt nhất cho doanh nghiệp của bạn. Với hơn
                    450 loại trà khác nhau, chúng tôi có thể đưa
                    ra gợi ý phù hợp với loại hình cơ sở của bạn</p>
                <button class="partner__btn">
                    TƯ VẤN MIỄN PHÍ
                </button>
            </div>
            <div>
                <img src={Landing_Second_Image} alt="" />
            </div>
        </div>
    )
}

export default Partner