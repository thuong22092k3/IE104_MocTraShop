import {
    Bach_Tra,
    Hong_Tra,
    Dung_Cu_Pha_Tra,
    Matcha,
    Tra_Chai,
    Tra_O_Long,
    Tra_Rooibos,
    Tra_Thao_Moc,
    Tra_Xanh,
} from './Images'

const categories = [
    {
        id: 1,
        display: "HỒNG TRÀ",
        categorySlug: "hong-tra",
        image: Hong_Tra,
    },
    {
        id: 2,
        display: "TRÀ XANH",
        categorySlug: "tra-xanh",
        image: Tra_Xanh,
    },
    {
        id: 3,
        display: "BẠCH TRÀ",
        categorySlug: "bach-tra",
        image: Bach_Tra,
    },
    {
        id: 4,
        display: "MATCHA",
        categorySlug: "matcha",
        image: Matcha,
    },
    {
        id: 5,
        display: "TRÀ THẢO MỘC",
        categorySlug: "tra-thao-moc",
        image: Tra_Thao_Moc,
    },
    {
        id: 6,
        display: "TRÀ CHAI ẤN ĐỘ",
        categorySlug: "tra-chai-an-do",
        image: Tra_Chai,
    },
    {
        id: 7,
        display: "TRÀ Ô LONG",
        categorySlug: "tra-o-long",
        image:Tra_O_Long,
    },
    {
        id: 8,
        display: "TRÀ ROOIBOS",
        categorySlug: "tra-rooibos",
        image: Tra_Rooibos,
    },
    {
        id: 9,
        display: "DỤNG CỤ PHA TRÀ",
        categorySlug: "dung-cu-pha-tra",
        image: Dung_Cu_Pha_Tra,
    }
]

const getAllCategory = () => categories;

const getCategoryBySlug = (cate) => getAllCategory().find((element) => element.categorySlug === cate);

const categoryData = {
    getAllCategory,
    getCategoryBySlug
};

export default categoryData;