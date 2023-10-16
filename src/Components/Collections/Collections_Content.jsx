import React, { Component } from 'react';
//import Switch from "react-switch";
import { Link } from 'react-router-dom';
import { Collections1 } from '../../assets/Images'

class Collections extends Component {
  constructor() {
    super();
    this.state = {
      filters: {
        collection: false,
        origin: false,
        flavor: false,
        usage: false,
        caffeine: false,
        allergies: false,
        organic: false,
      },

      collectionFilters: { // Thêm các filter cho Bộ Sưu Tập
        hongTra: false,
        traXanh: false,
      },
      showCollectionFilters: false,
      sortOption: 'alphabetical', // Default sort option
      products: [
        {
          name: 'Hồng Trà A',
          image: Collections1,
          price: 1000,
          collection: ['hongTra'],
        },
        {
          name: 'Trà Xanh B',
          image: Collections1,
          price: 1500,
          collection: ['traXanh'],
        },
        {
          name: 'Hồng Trà C',
          image: Collections1,
          price: 1200,
          collection: ['hongTra'],
        },

        {
          name: 'Hồng Trà C',
          image: Collections1,
          price: 1200,
          collection: ['hongTra'],
        },

        {
          name: 'Hồng Trà C',
          image: Collections1,
          price: 1200,
          collection: ['hongTra'],
        },

        {
          name: 'Hồng Trà C',
          image: Collections1,
          price: 1200,
          collection: ['hongTra'],
        },

        {
          name: 'Hồng Trà C',
          image: Collections1,
          price: 1200,
          collection: ['hongTra'],
        },

        {
          name: 'Hồng Trà C',
          image: Collections1,
          price: 1200,
          collection: ['hongTra'],
        },

        {
          name: 'Hồng Trà C',
          image: Collections1,
          price: 1200,
          collection: ['hongTra'],
        },


      ] // Dữ liệu sản phẩm
    };
  }

  // Xử lý khi click vào filter
  handleFilterClick = (filterName) => {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [filterName]: !prevState.filters[filterName],
      },
    }));
  };
  handleCollectionFilterClick = (filterName) => {
    this.setState((prevState) => ({
      collectionFilters: {
        ...prevState.collectionFilters,
        [filterName]: !prevState.collectionFilters[filterName],
      },
    }));
  };
  handleOrganicSwitch = () => {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        organic: !prevState.filters.organic,
      },
    }));
  };

  handleFilterButtonClick = () => {
    this.setState((prevState) => ({
      showCollectionFilters: !prevState.showCollectionFilters,
    }));
  };
  // Xử lý khi thay đổi sắp xếp
  handleSortChange = (event) => {
    this.setState({ sortOption: event.target.value });
  };

  // Render các filter menu
  renderFilters() {
    const filterNames = {
      collection: 'BỘ SƯU TẬP',
      origin: 'XUẤT XỨ',
      flavor: 'MÙI VỊ',
      usage: 'CÔNG DỤNG',
      caffeine: 'CAFFEINE',
      allergies: 'CHẤT DỊ ỨNG',
      organic: 'HỮU CƠ',
    };

    return (
      <table className="filter-table">
        <tbody>
          {Object.keys(this.state.filters).map((filterName) => (
            <tr key={filterName} className="filter">
              <td>
                {filterNames[filterName]}
              </td>
              <td>
                {filterName === 'organic' ? (
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={this.state.filters.organic}
                      onChange={this.handleOrganicSwitch}
                    />
                    <span className="slider round"></span>
                  </label>
                ) : (
                  this.state.filters[filterName] ? (
                    <button className="filter-button minus" onClick={() => this.handleFilterClick(filterName)}>-</button>
                  ) : (
                    <button className="filter-button plus" onClick={() => this.handleFilterClick(filterName)}>+</button>
                  )
                )}
              </td>
              {filterName === 'collection' && this.state.showCollectionFilters && (
                <td>
                  <div className="filter-options">
                    <input
                      type="checkbox"
                      id="hongTra"
                      name="hongTra"
                      value="hongTra"
                      checked={this.state.collectionFilters.hongTra}
                      onChange={() => this.handleCollectionFilterClick("hongTra")}
                    />
                    <label htmlFor="hongTra">Hồng Trà</label>
                    <br />
                    <input
                      type="checkbox"
                      id="traXanh"
                      name="traXanh"
                      value="traXanh"
                      checked={this.state.collectionFilters.traXanh}
                      onChange={() => this.handleCollectionFilterClick("traXanh")}
                    />
                    <label htmlFor="traXanh">Trà Xanh</label>
                  </div>
                </td>
              )}
            </tr>
          ))}

        </tbody>
      </table>
    );
  }

  // ...

  renderProducts() {
    return this.state.products.map((product, index) => (
      <div key={index} className="product">
        <Link to={`/product`}>
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <div className="product-name">{product.name}</div>
            <div className="product-price"><p>đ {product.price}</p> / 50g</div>
          </div>
        </Link>
      </div>
    ));
  }


  render() {
    return (
      <div className="collections">
        <div className="filters">
          {this.renderFilters()}
        </div>
        <div className="products">
          <div className="sort">
            <select onChange={this.handleSortChange}>
              <option value="">SẮP XẾP THEO</option>
              <option value="alphabetical">TỪ A - Z</option>
              <option value="alphabetical">TỪ Z - A</option>
            </select>
          </div>
          <div className="product-list">
            {this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
