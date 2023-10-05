import React from 'react'
import { CupIcon, RedeemIcon, ShippingIcon, SellIcon } from "../Icons/index.jsx"

const Policy = () => {
    return (
        <div class="policy">
            <div className="policy__elements">
                <CupIcon />
                <p>450+ LOẠI TRÀ KHÔ</p>
            </div>
            <div className="policy__elements">
                <RedeemIcon />
                <p>CHỨNG NHẬN TRÀ HỮU CƠ</p>
            </div>
            <div className="policy__elements">
                <ShippingIcon />
                <p>GIAO HÀNG MIỄN PHÍ</p>
            </div>
            <div className="policy__elements">
                <SellIcon />
                <p>MẪU DÙNG THỬ</p>
            </div>
        </div>
    )
}

export default Policy