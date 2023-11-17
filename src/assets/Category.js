const categories = [
    {
        id: 1,
        display: "HỒNG TRÀ",
        categorySlug: "hong-tra",
    },
    {
        id: 2,
        display: "TRÀ XANH",
        categorySlug: "tra-xanh",
    },
    {
        id: 3,
        display: "BẠCH TRÀ",
        categorySlug: "bach-tra",
    },
    {
        id: 4,
        display: "MATCHA",
        categorySlug: "matcha",
    },
    {
        id: 5,
        display: "TRÀ THẢO MỘC",
        categorySlug: "tra-thao-moc",
    },
    {
        id: 6,
        display: "TRÀ CHAI ẤN ĐỘ",
        categorySlug: "tra-chai-an-do",
    },
    {
        id: 7,
        display: "TRÀ Ô LONG",
        categorySlug: "tra-o-long",
    },
    {
        id: 8,
        display: "TRÀ ROOIBOS",
        categorySlug: "tra-rooibos",
    },
    {
        id: 9,
        display: "DỤNG CỤ PHA TRÀ",
        categorySlug: "dung-cu-pha-tra",
    }
]

const getAllCategory = () => categories;

const getCategoryBySlug = (cate) => getAllCategory().find((element) => element.categorySlug === cate);

const categoryData = {
    getAllCategory,
    getCategoryBySlug
};

export default categoryData;