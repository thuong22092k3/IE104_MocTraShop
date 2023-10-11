import React, { useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import New_Blog_Image_1 from '../../assets/Images/New_Blog_Image_1.jpg'
import New_Blog_Image_2 from '../../assets/Images/New_Blog_Image_2.jpg'
import New_Blog_Image_3 from '../../assets/Images/New_Blog_Image_3.jpg'


const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768, // Adjust this breakpoint as needed
            settings: {
                slidesToShow: 1, // Change the number of slides to 1 on smaller screens
            },
        },
    ],
};


const slides = [
    {
        imgSrc: New_Blog_Image_1,
        title: 'Cách pha trà như chuyên gia',
        content: 'Điều quan trọng là bạn phải để tâm vào ấm trà. Trà khô sẽ ngấm đủ lượng lượng nước với nhiệt độ phù hợp. Khi đủ thời gian quy định trả sẽ toả hương thơm. Thưởng thức trà từng giọt, quan sát màu sắc, hương thơm và vị trà sẽ mang lại trải nghiệm thú vị và thư giãn.',
    },
    {
        imgSrc: New_Blog_Image_2,
        title: 'Sự thật về hương trà',
        content: 'Loại trà sẽ ảnh hưởng đến hương trà. Trà xanh thường có hương tươi mát, trà đen có hương đậm đà và ngọt ngào, trong khi trà oolong có mùi hoa quả và hoa cỏ.',
    },
    {
        imgSrc: New_Blog_Image_3,
        title: 'Trà Xanh: Trà Xanh Là Gì, 15 Tác Dụng & Những Ai Không Nên Uống Trà Xanh',
        content: 'Trà xanh hay chè xanh là loại thực phầm được dùng để ngâm với nước sôi lấy nước uống. Uống trà xanh rất tốt cho sức khỏe, giúp ngăn ngừa nguy cơ mắc các bệnh nguy hiểm. Lưu ý không phải cũng có thể dùng được trà xanh. ',
    },
];

const NewBlog = () => {

    return (
        <div className="newBlog">
            <h1 class="partner__h1">Blog Mới Nhất</h1>
            <div className="container">
                <Slider {...sliderSettings}>
                    {slides.map((slide) => (
                        <div className="newBlog__content" style="display: flex">
                            <img src={slide.imgSrc} alt={slide.title} />
                            <div class="newBlog__content__info">
                                <h2 class="newBlog__h2">{slide.title}</h2>
                                <p class="landingPage__p">{slide.content}</p>
                                <button class="newBlog__btn">Đọc thêm</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default NewBlog