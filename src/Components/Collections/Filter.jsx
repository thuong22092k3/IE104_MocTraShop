import React, { useState } from 'react';

const Filter = () => {
    const checkList1 = ["Hồng trà", "Trà xanh", "Bạch trà", "Trà Chai Ấn Độ", "Matcha", "Trà thảo mộc", "Trà Ô long", "Trà Rooibos", "Dụng cụ pha trà"];
    const checkList2 = ["Ấn độ", "Nhật bản", "I ran", "Nam phi"];
    const checkList3 = ["Cay", "Ngọt", "Citrus", "Smooth", "Trái cây", "Floral", "Grassy", "Bạc hà", "Đắng", "Creamy"];
    const checkList4 = ["Giải độc", "Nạp năng lượng", "Thư giãn", "Hỗ trợ tiêu hoá "];
    const checkList5 = ["Không Caffeine", "Caffeine thấp", "Caffeine trung bình", "Caffeine cao"];
    const checkList6 = ["Không Lactose", "Không Gluten", "Không hạt ", "Không đậu nành "];


    const [showFilter1, setShowFilter1] = useState(false);
    const [showFilter2, setShowFilter2] = useState(false);
    const [showFilter3, setShowFilter3] = useState(false);
    const [showFilter4, setShowFilter4] = useState(false);
    const [showFilter5, setShowFilter5] = useState(false);
    const [showFilter6, setShowFilter6] = useState(false);
    const [organic, setOrganic] = useState(false);
    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    var isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";
    const handleOrganicSwitch = () => {
        this.setState((prevState) => ({
            filters: {
                ...prevState.filters,
                organic: !prevState.filters.organic,
            },
        }));
    };

    return (
        <div className="filters">
            <table>
                <tbody>
                    <tr className="category-row">
                        <td >
                            <p>BỘ SƯU TẬP (1)</p>
                        </td>
                        <td>
                            <button className="filters__button-minus" onClick={() => setShowFilter1(!showFilter1)}>
                                {showFilter1 ? '-' : '+'}
                            </button>
                        </td>
                    </tr>
                    {showFilter1 && (
                        <tr className="category-row">
                            <td colSpan="2">
                                <div className="filters__filter">
                                    {checkList1.map((item, index) => (
                                        <div key={index}>
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    )}

                    <tr className="category-row">
                        <td>
                            <p>XUẤT XỨ</p>
                        </td>
                        <td>
                            <button className="filters__button-minus" onClick={() => setShowFilter2(!showFilter2)}>
                                {showFilter2 ? '-' : '+'}
                            </button>
                        </td>
                    </tr>
                    {showFilter2 && (
                        <tr className="category-row">
                            <td colSpan="2">
                                <div className="filters__filter">
                                    {checkList2.map((item, index) => (
                                        <div key={index}>
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    )}

                    <tr className="category-row">
                        <td>
                            <p>MÙI VỊ</p>
                        </td>
                        <td>
                            <button className="filters__button-minus" onClick={() => setShowFilter3(!showFilter3)}>
                                {showFilter3 ? '-' : '+'}
                            </button>
                        </td>
                    </tr>
                    {showFilter3 && (
                        <tr className="category-row">
                            <td colSpan="2">
                                <div className="filters__filter">
                                    {checkList3.map((item, index) => (
                                        <div key={index}>
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    )}

                    <tr className="category-row">
                        <td>
                            <p>CÔNG DỤNG</p>
                        </td>
                        <td>
                            <button className="filters__button-minus" onClick={() => setShowFilter4(!showFilter4)}>
                                {showFilter4 ? '-' : '+'}
                            </button>
                        </td>
                    </tr>
                    {showFilter4 && (
                        <tr className="category-row">
                            <td colSpan="2">
                                <div className="filters__filter">
                                    {checkList4.map((item, index) => (
                                        <div key={index}>
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    )}

                    <tr className="category-row">
                        <td>
                            <p>CAFEINE</p>
                        </td>
                        <td>
                            <button className="filters__button-minus" onClick={() => setShowFilter5(!showFilter5)}>
                                {showFilter5 ? '-' : '+'}
                            </button>
                        </td>
                    </tr>
                    {showFilter5 && (
                        <tr className="category-row">
                            <td colSpan="2">
                                <div className="filters__filter">
                                    {checkList5.map((item, index) => (
                                        <div key={index}>
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    )}

                    <tr className="category-row">
                        <td>
                            <p>CHẤT DỊ ỨNG</p>
                        </td>
                        <td>
                            <button className="filters__button-minus" onClick={() => setShowFilter6(!showFilter6)}>
                                {showFilter6 ? '-' : '+'}
                            </button>
                        </td>
                    </tr>
                    {showFilter6 && (
                        <tr className="category-row">
                            <td colSpan="2">
                                <div className="filters__filter">
                                    {checkList6.map((item, index) => (
                                        <div key={index}>
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span className={isChecked(item)}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    )}

                    <tr className="category-row">
                        <td>
                            <p>HỮU CƠ</p>
                        </td>
                        <td>
                            <div className="filters__filter">
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        onChange={() => setOrganic(!organic)}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Filter;
