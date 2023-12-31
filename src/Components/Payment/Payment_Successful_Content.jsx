import React from "react";
import {
  CartSidebar_1,
  CartSidebar_2,
  CartSidebar_3,
} from "../../assets/Images";

const Payment_Successful_Content = () => {
  let orderDetails = {
    a: document.getElementById("address"),
    e: document.getElementById("email"),

    confirm: function (a, e) {
      window.confirm(
        `XÁC NHẬN ĐỂ IN VỚI CÁC THÔNG TIN:\n\nTên sản phẩm: Trà quế gừng Ceylon - 50 g\nTổng tiền: 3000 VND\nGiao hàng: 1000 VND\nTổng: 4000 VND\nĐịa chỉ: ${a}Email: ${e}\nNgày giao hàng dự tính: Ngày 17, tháng 12, năm 2023`
      );
    },
  };

  const printReceipt = () => {
    window.confirm(
      `XÁC NHẬN ĐỂ IN VỚI CÁC THÔNG TIN:\n\nTên sản phẩm: Trà quế gừng Ceylon - 50 g\nTổng tiền: 3000 VND\nGiao hàng: 1000 VND\nTổng: 4000 VND\nĐịa chỉ: Đường số 6, P. Linh Trung, Tp. Thủ Đức, Tp. Hồ Chí Minh,
      Việt Nam 71308 Tp. Thủ Đức\nEmail: tueminh35@gmail.com\nNgày giao hàng dự tính: Ngày 17, tháng 12, năm 2023`
    );
  };
  return (
    <div class="paymentsuccessful">
      <div class="paymentsuccessful__header">
        <h1>THANK YOU!</h1>
        <p>
          Chúng tôi đã nhận được đơn đặt hàng của bạn và sẽ bắt đầu chuẩn bị gói
          hàng của bạn ngay lập tức. <br />
          Bạn sẽ nhận được email xác nhận trong giây lát.
        </p>
        <h3>CHI TIẾT ĐẶT HÀNG - 8972491047359</h3>
      </div>
      <div class="paymentsuccessful__content">
        <div class="paymentsuccessful__content__left">
          <div className="paymentsuccessful__content__left__products">
            <div className="paymentsuccessful__content__left__products__product">
              <div className="paymentsuccessful__content__left__products__product__detail">
                <img src={CartSidebar_1} alt="" />
                <p>Trà quế gừng Ceylon - 50 g</p>
              </div>
              <div className="paymentsuccessful__content__left__products__product__quantity">
                <p>
                  <span className="span_500">1000 VND</span>
                </p>
              </div>
            </div>
            <div className="paymentsuccessful__content__left__products__product">
              <div className="paymentsuccessful__content__left__products__product__detail">
                <img src={CartSidebar_2} alt="" />
                <p>Trà quế gừng Ceylon - 50 g</p>
              </div>
              <div className="paymentsuccessful__content__left__products__product__quantity">
                <p>
                  <span className="span_500">1000 VND</span>
                </p>
              </div>
            </div>
            <div className="paymentsuccessful__content__left__products__product">
              <div className="paymentsuccessful__content__left__products__product__detail">
                <img src={CartSidebar_3} alt="" />
                <p>Trà quế gừng Ceylon - 50 g</p>
              </div>
              <div className="paymentsuccessful__content__left__products__product__quantity">
                <p>
                  <span className="span_500">1000 VND</span>
                </p>
              </div>
            </div>
          </div>
          <div className="paymentsuccessful__content__left__total">
            <hr />
            <div className="paymentsuccessful__content__left__total__payment">
              <p>Tổng tiền</p>
              <p> 3000 VND</p>
            </div>
            <div className="paymentsuccessful__content__left__total__payment">
              <p>Giao hàng</p>
              <p> 1000 VND</p>
            </div>
            <hr />
            <div className="paymentsuccessful__content__left__total__payment">
              <p class="p1">Tổng</p>
              <p class="p1"> 4000 VND</p>
            </div>
          </div>
        </div>
        <div class="paymentsuccessful__content__right">
          <div class="paymentsuccessful__content__right__info">
            <div class="paymentsuccessful__content__right__info__left">
              <h2>Chi tiết giao hàng</h2>
              <div class="paymentsuccessful__content__right__info__left__box">
                <div class="paymentsuccessful__content__right__info__left__box__address">
                  <p class="p1">Địa chỉ giao hàng</p>
                  <p id="address">
                    Đường số 6, P. Linh Trung, Tp. Thủ Đức, Tp. Hồ Chí Minh,
                    Việt Nam
                    <br />
                    71308 <br />
                    Tp. Thủ Đức <br />
                  </p>
                </div>
                <div class="paymentsuccessful__content__right__info__left__box__info">
                  <p class="p1">Thông tin liên hệ</p>
                  <p id="email">tueminh35@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="paymentsuccessful__content__right__info__right">
              <h2>Phương thức thanh toán</h2>
              <div class="owner">
                <p class="p1">Chủ thẻ</p>
                <p>XXXX XXXX XXXX 5425</p>
              </div>
              <h2 class="h2">Ngày giao hàng dự tính</h2>
              <p>Ngày 17, tháng 12, năm 2023</p>
            </div>
          </div>
          <div class="paymentsuccessful__content__right__button">
            <a href="/Collections">
              <button class="button1">TIẾP TỤC MUA SẮM</button> <br />
            </a>
            <button class="button2" onClick={printReceipt}>
              IN BIÊN LAI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment_Successful_Content;
