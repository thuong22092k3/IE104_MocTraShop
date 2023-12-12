import React from "react";
const Signup_Content = () => {
  const onSignup = () => {
    let info = {
      n: document.getElementById("name").value,
      pn: document.getElementById("phoneNum").value,
      e: document.getElementById("email").value,
      p: document.getElementById("passWord").value,
      confirm: function (n, pn, e, p) {
        window.confirm(
          `XÁC NHẬN THÔNG TIN ĐĂNG KÝ:\n\nHọ và tên:${n}\nSố điện thoại:${pn}\nĐịa chỉ Email:${e}\nMật khẩu: ${p}`
        );
      },
    };

    var n = info.n;
    var pn = info.pn;
    var e = info.e;
    var p = info.p;
    info.confirm(n, pn, e, p);
  };
  return (
    <div class="signup">
      <div class="signup__content">
        <div class="signup__content__box">
          <h1>ĐĂNG KÝ</h1>
        </div>
        <div class="signup__content__box">
          <input type="text" placeholder="Họ và tên" id="name" />
        </div>
        <div class="signup__content__box">
          <input type="text" placeholder="Số điện thoại" id="phoneNum" />
        </div>
        <div class="signup__content__box">
          <input type="text" placeholder="Địa chỉ Email" id="email" />
        </div>
        <div class="signup__content__box">
          <input type="password" placeholder="Nhập mật khẩu" id="passWord" />
        </div>
        <div class="signup__content__box">
          <input
            type="password"
            placeholder="Xác nhận lại mật khẩu"
            id="passWordAgain"
          />
        </div>
        <div class="signup__content__box1">
          <button onClick={onSignup}>ĐĂNG KÝ</button>
        </div>
        <div class="signup__content__box">
          <p>
            Bạn đã có tài khoản? Đăng nhập <a href="/Account">tại đây</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup_Content;
