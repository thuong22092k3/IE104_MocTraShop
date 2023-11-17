const categories = [
    {
        id: 1,
        display: "Hồng trà",
        categorySlug: "hong-tra",
    },
    {
        id: 2,
        display: "Trà xanh",
        categorySlug: "tra-xanh",
    },
    {
        id: 3,
        display: "Bạch trà",
        categorySlug: "bach-tra",
    },
    {
        id: 4,
        display: "Match",
        categorySlug: "matcha",
    },
    {
        id: 5,
        display: "Trà thảo mộc",
        categorySlug: "tra-thao-moc",
    },
    {
        id: 6,
        display: "Trà Chai Ấn Độ",
        categorySlug: "tra-chai-an-do",
    },
    {
        id: 7,
        display: "Trà Ô long",
        categorySlug: "tra-o-long",
    },
    {
        id: 8,
        display: "Trà Rooibos",
        categorySlug: "tra-rooibos",
    },
    {
        id: 9,
        display: "Dụng cụ pha trà",
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