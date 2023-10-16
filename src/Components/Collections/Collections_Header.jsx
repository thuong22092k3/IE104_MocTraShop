import React from 'react'
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Input, Button } from "antd";
import { BannerCate_Tra,  Collections_Banner } from '../../assets/Images';

const Collections_Header = () => {
    return (
        <div className="collections_header">
            <img src={BannerCate_Tra} alt="" />
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/">TRANG CHỦ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>BỘ SƯU TẬP</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    )
}
export default Collections_Header