import React from 'react'
import { Link } from 'react-router-dom';
import { Bach_Tra, Hong_Tra, Tra_Xanh, Matcha, Tra_Thao_Moc, Tra_Chai, Tra_O_Long, Tra_Rooibos, Dung_Cu_Pha_Tra} from '../../assets/Images'

const products = [

    { id: 1, name: 'Hồng trà', imageUrl: Hong_Tra },
    { id: 2, name: 'Trà xanh', imageUrl: Tra_Xanh },
    { id: 3, name: 'Bạch trà', imageUrl: Bach_Tra },
    { id: 4, name: 'Matcha', imageUrl: Matcha },
    { id: 5, name: 'Trà thảo mộc', imageUrl: Tra_Thao_Moc },
    { id: 6, name: 'Trà chai Ấn độ', imageUrl: Tra_Chai },
    { id: 7, name: 'trà ô long', imageUrl: Tra_O_Long },
    { id: 8, name: 'trà rooibos', imageUrl: Tra_Rooibos },
    { id: 9, name: 'dụng cụ pha trà', imageUrl: Dung_Cu_Pha_Tra },
    { id: 10, name: 'dụng cụ pha trà', imageUrl: Dung_Cu_Pha_Tra },
    { id: 11, name: 'dụng cụ pha trà', imageUrl: Dung_Cu_Pha_Tra },
    { id: 12, name: 'dụng cụ pha trà', imageUrl: Dung_Cu_Pha_Tra },
];

const ProductList = () => {

    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
        rows.push(products.slice(i, i + 4));
    }

    return (
        <div className="cards">
            <h1 class="partner__h1">BỘ SƯU TẬP</h1>
            {rows.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((product) => (
                        <Link to="/collections">
                            <div className="card" key={product.id}>
                                <img src={product.imageUrl} alt={product.name} />
                                <div className='card__title'>{product.name}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ProductList