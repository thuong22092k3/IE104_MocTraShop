import React from "react";
import { LocationIcon, PhoneIcon, ClockIcon } from "../Icons";
const Contact_Content = () => {
  const onSend = () => {
    let info = {
      n: document.getElementById("name").value,
      e: document.getElementById("email").value,
      t: document.getElementById("title").value,
      c: document.getElementById("content").value,
      confirm: function (n, e, t, c) {
        window.confirm(
          `XÁC NHẬN THÔNG TIN ĐĂNG KÝ:\n\nHọ và tên:${n}\nĐịa chỉ Email:${e}\nChủ đề: ${t}\nNội dung: ${c}`
        );
      },
    };

    var n = info.n;
    var e = info.e;
    var t = info.t;
    var c = info.c;
    info.confirm(n, e, t, c);
  };
  return (
    <div className="contact">
      <div class="contact__content__header">
        <h1>Hãy Liên Hệ Với Chúng Tôi</h1>
        <br />
        <p class="grey_text">
          Để biết thêm thông tin về sản phẩm và dịch vụ của chúng tôi. Xin vui
          lòng gửi <br /> email cho chúng tôi. Nhân viên của chúng tôi luôn có
          mặt để giúp đỡ bạn!
        </p>
      </div>
      <div class="contact__content">
        <div class="contact__content__main">
          <div class="contact__content__main__left">
            <table>
              <tr>
                <td class="img_element">
                  <LocationIcon />{" "}
                </td>
                <td>
                  <div class="contact__content__main__left__block">
                    <p class="contact__content__main__left__text1">Địa chỉ</p>
                    <p>
                      KTX Khu A, Đường số 6, <br /> Phường Linh Trung, Thủ Đức
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="img_element">
                  <PhoneIcon />
                </td>
                <td>
                  <div class="contact__content__main__left__block">
                    <p class="contact__content__main__left__text1">
                      {" "}
                      Số điện thoại
                    </p>
                    <p>
                      Di động: 0354466237 <br />
                      Đường dây nóng: 0399776527
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="img_element">
                  <ClockIcon />
                </td>
                <td>
                  <div class="contact__content__main__left__block">
                    <p class="contact__content__main__left__text1">
                      {" "}
                      Thời gian làm việc
                    </p>
                    <p>
                      Thứ 2-Thứ 6: 8:00-22:00 <br />
                      Thứ 7-Chủ Nhật: 8:00-21:00
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="contact__content__main__right">
            <div class="p0">
              <p>Tên của bạn</p>
            </div>
            <input type="text" placeholder="Abc" id="name" />
            <div class="p1">
              <p>Địa chỉ gmail</p>
            </div>
            <input type="text" placeholder="Abc@gmail.com" id="email" />
            <div class="p1">
              <p>Chủ đề</p>
            </div>
            <input type="text" placeholder="Abc" id="title" />
            <div class="p1">
              <p>Bạn có câu hỏi gì về chủ đề này?</p>
            </div>
            <textarea
              name=""
              cols="30"
              rows="10"
              placeholder="Abc..."
              id="content"
            ></textarea>{" "}
            <br />
            <div class="button_gui">
              <button id="button_Gui" onClick={onSend}>Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Content;
