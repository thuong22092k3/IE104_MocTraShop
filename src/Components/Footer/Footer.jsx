import React from "react";
import { EmailIcon, LocationIcon, PhoneIcon } from "../Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <p>BỘ SƯU TẬP</p>
          <ul>
            <li>Hồng Trà</li>
            <li>Bạch Trà</li>
            <li>Trà Xanh</li>
            <li>Trà Thảo Mộc</li>
            <li>Trà Chai Ấn Độ</li>
            <li>Trà Ô Long</li>
            <li>Trà Rooibos</li>
            <li>Dụng Cụ Pha Trà</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>GIỚI THIỆU</p>
          <ul>
            <li>Giới Thiệu về BrandName</li>
            <li>Giới Thiệu về Trà của BrandName</li>
            <li>Học Viện Trà</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>DỊCH VỤ KHÁCH HÀNG</p>
          <ul>
            <li>Đặt Hàng và Thanh Toán</li>
            <li>Giao Hàng</li>
            <li>Quyền Riêng Tư và Chính Sách</li>
            <li>Điều Khoản và Điều Kiện</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>LIÊN HỆ</p>
          <ul>
            <li>
              <i>
                <LocationIcon />
              </i>
              KTX khu A, Đ.Tạ Quang Bửu, P. Linh Trung, TP. Thủ Đức, TP. HCM
            </li>
            <li>
              <i>
                <EmailIcon />
              </i>
              Email: 21521140@gm.uit.edu.vn / 21521509@gm.uit.edu.vn
            </li>
            <li>
              <i>
                <PhoneIcon />
              </i>
              Tel: 0764225752
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
