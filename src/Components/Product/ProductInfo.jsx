import React from 'react'
import { BottleIcon, TemperatureIcon, AlarmIcon, CircleIcon } from '../../Components/Icons/index'

const ProductInfo = () => {
  return (
    <div className="info">
      <div className="info__structure">
        <h1>Hướng dẫn pha</h1>
        <table>
          <tbody>
            <tr>
              <td> <BottleIcon /> </td>
              <td> <span>LƯỢNG TRÀ:</span> 2 muỗng cà phê/500ml
              </td>
            </tr>
            <tr>
              <td> </td>
              <td><hr /></td>
            </tr>
            <tr></tr>
            <tr>
              <td> <TemperatureIcon /> </td>
              <td> <span>NHIỆT ĐỘ NƯỚC:</span>  100°C</td>
            </tr>
            <tr>
              <td> </td>
              <td><hr /></td>
            </tr>
            <tr>
              <td> <AlarmIcon /> </td>
              <td> <span>THỜI GIAN Ủ:</span> 3 - 5 minutes</td>
            </tr>
            <tr>
              <td> </td>
              <td><hr /></td>
            </tr>
            <tr>
              <td> <CircleIcon /> </td>
              <td> <span>MÀU TRÀ SAU 3 PHÚT</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="info__right">
        <div className="info__right__teaInfoes">
          <h1>Thông tin về trà</h1>
          <div className="info__right__teaInfoes__content">
            <div className="info__right__teaInfoes__content__teaInfo">
              <h4>mùi vị</h4>
              <p>Cay</p>
            </div>
            <div class="info__right__teaInfoes__content__line"></div>
            <div className="info__right__teaInfoes__content__teaInfo">
              <h4>công dụng</h4>
              <p>Hỗ trợ tiêu hóa</p>
            </div>
            <div class="info__right__teaInfoes__content__line"></div>

            <div className="info__right__teaInfoes__content__teaInfo">
              <h4>caffeine</h4>
              <p>Trung bình</p>
            </div>
            <div class="info__right__teaInfoes__content__line"></div>
            <div className="info__right__teaInfoes__content__teaInfo">
              <h4>chất dị ứng</h4>
              <p>Không hạt</p>
            </div>
          </div>
        </div>
        <div className="info__right__ingredient">
          <h1>Thành phần</h1>
          <p>Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper, <br />Cinnamon sticks, Cardamom, Cinnamon pieces.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo