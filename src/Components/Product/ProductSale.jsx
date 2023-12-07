import React, { useState } from "react";
import {
  Product_Sale1,
  Bag_50g,
  Bag_100g,
  Bag_170g,
  Bag_250g,
  Bag_1kg,
  Bag_Sample,
} from "../../assets/Images";
import { LanguageIcon, RedeemIcon, EcoIcon, BagIcon } from "../Icons/index";
import CartSidebar from "../Header/CartSidebar";

const ProductSale = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isCartVisible, setCartVisible] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setCartVisible(true);
  };

  const handleOverlayClick = () => {
    console.log("Overlay clicked");
    setCartVisible(false);
  };

  const handleCartSidebarClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div className="sale">
        <div className="sale__img">
          <img src={product.image01} alt={product.title} />
        </div>
        <div className="sale__info">
          <h1>{product.title}</h1>
          <h4 className="sale__info__p">{product.describe}</h4>
          <div className="sale__info__origin">
            <div className="sale__info__origin__content">
              <LanguageIcon />
              <p>Xuất xứ: {product.origin}</p>
            </div>
            <div className="sale__info__origin__content">
              <RedeemIcon />
              <p>Hữu cơ</p>
            </div>
            <div className="sale__info__origin__content">
              <EcoIcon />
              <p>Thuần chay</p>
            </div>
          </div>
          <h1> ₫{product.price * quantity}.000</h1>
          <p className="sale__info__p">Phân loại</p>
          <div className="sale__info__classify">
            <button>
              <img src={Bag_50g} className="image" alt="" />
            </button>
            <button>
              <img src={Bag_100g} className="image" alt="" />
            </button>
            <button>
              <img src={Bag_170g} className="image" alt="" />
            </button>
            <button>
              <img src={Bag_250g} className="image" alt="" />
            </button>
            <button>
              <img src={Bag_1kg} className="image" alt="" />
            </button>
            <button>
              <img src={Bag_Sample} className="image" alt="" />
            </button>
          </div>
          <div className="sale__info__components">
            <div className="sale__info__components__quantity">
              <span
                className="sale__info__components__quantity__minus"
                onClick={handleDecrement}
              >
                -
              </span>
              <span className="sale__info__components__quantity__number">
                {quantity}
              </span>
              <span
                className="sale__info__components__quantity__plus"
                onClick={handleIncrement}
              >
                +
              </span>
            </div>
            <button
              className="sale__info__components__button"
              onClick={handleAddToCart}
            >
              <BagIcon />
              <p>Thêm vào giỏ hàng</p>
            </button>
          </div>
        </div>
      </div>

      {isCartVisible && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div
            className="cart-sidebar-wrapper"
            onClick={handleCartSidebarClick}
          >
            <CartSidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSale;
