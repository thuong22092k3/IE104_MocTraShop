import React from 'react'
import{Landing_Main_Image} from '../../assets/Images'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div>
                <img src={Landing_Main_Image} alt=""/>
            </div>
            <div className="container">
                <h1 class="landingPage__h1">Uống trà là nghệ thuật thổi hơi vào cuộc sống</h1>
                <p class="landingPage__p">Trà là nền tảng của sự yên bình và tĩnh lặng trong cuộc sống hối hả của chúng ta. 
                    Tại Mộc trà, chúng tôi tận dụng sự hài hòa tự nhiên của thiên nhiên để mang đến cho bạn những giọt trà tinh túy nhất. 
                    Hãy dừng lại, thư giãn và thưởng thức vị ngon của trà trong mỗi hũ đựng của chúng tôi. 
                    Chúng tôi tin rằng mỗi giọt trà có thể biến một phút tĩnh lặng thành một trải nghiệm tuyệt vời.</p>
                    <button class="landingPage__btn">
                        BROWES TEAS
                    </button>
            </div>
        </div>
    )
}

export default LandingPage