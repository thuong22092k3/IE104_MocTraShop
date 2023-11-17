const product_01_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Agua-de-azahares.png";
const product_02_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Cranberry-herbal.png";
const product_03_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Berry-Berry.png";
const product_04_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Alishan-HM-Oolong.png";
const product_05_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Blanck-mango.png";
const product_06_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Black-mango-1.png";
const product_07_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Dragon-4-flowers-Artisan-green-Tea.jpg";
const product_08_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Flor-Azul-Butterfly-Pea.jpg";
const product_09_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Casablanca.png";
const product_10_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Chamomile-L-roses.png";
const product_11_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Cherry-Rose-green-tea.png";
const product_12_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Te%CC%81-Blanco-Pai-Mu-Tan.jpg";
const product_13_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Oriental-Beauty-Oolong.jpg";
const product_14_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Earl-Grey.png";
const product_15_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Vanilla-chai.png";
const product_16_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Oolong-Grape.jpg";
const product_17_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/chocolate-mint.png";
const product_18_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Sunshine-Lemon.png";
const product_19_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/05/Matcha-ceremonial-2.jpg";
const product_20_imgage_01 = "https://site.tippytea.org/wp-content/uploads/2021/10/Culinario-4.jpg";



const products = [
    {
        id: 1,
        title: "TRÀ AZHARES",
        origin: "Mexico",
        price: 200,
        describe: "Trà đen hữu cơ, hoa Azhar và vỏ cam. Hương vị của hoa và mạch nha. Hương trái cây và cam quýt làm cho món trà chiều này trở nên hoàn hảo.",
        image01: product_01_imgage_01,
        categorySlug: "tra-thao-moc",
        slug: "tra-azhares"
    },

    {
        id: 2,
        title: "TRÀ THẢO DƯỢC VIỆT QUẤT TÁO",
        origin: "USA",
        price: 180,
        describe: "Táo khô lát, cánh hoa dâm bụt và dầu việt quất",
        image01: product_02_imgage_01,
        categorySlug: "tra-thao-moc",
        slug: "tra-thao-duoc-viet-quat-tao",
    },

    {
        id: 3,
        title: "TRÀ QUẢ MỌNG",
        origin: "Canada",
        price: 160,
        describe: "Hương vị anh đào và quả mọng ngọt ngào. Tuyệt vời để thưởng thức nó nóng hoặc đá.",
        image01: product_03_imgage_01,
        categorySlug: "tra-thao-moc",
        slug: "tra-qua-mong",
    },
    {
        id: 4,
        title: "TRÀ Ô LONG NÚI CAO ALISHAN - ĐÀI LOAN",
        origin: "Đài Loan",
        price: 480,
        describe: "Lá trà phát triển chậm do độ cao, chúng hấp thụ độ cao và điều kiện đất đai độc đáo. Kết quả là, trà phát triển một hương vị đất phong phú đặc biệt, màu hổ phách vàng sáng và đặc tính tinh tế. Bạn sẽ được trải nghiệm một hương vị thanh thoát, mềm mại và thơm ngát mà không bị đắng.",
        image01: product_04_imgage_01,
        categorySlug: "tra-o-long",
        slug: "tra-o-long-nui-cao-Alishan",
    },
    {
        id: 5,
        title: "TRÀ BLACK MANGO",
        origin: "Ấn Độ",
        price: 180,
        describe: "Trà đen hữu cơ Keemun kết hợp với xoài! Sự kết hợp hoàn hảo!",
        image01: product_05_imgage_01,
        categorySlug: "tra-chai-an-do",
        slug: "tra-black-mango",
    },
    {
        id: 6,
        title: "TRÀ BLACK PEACH",
        origin: "Ấn Độ",
        price: 180,
        describe: "Trà đen hữu cơ kết hợp đào! Sự kết hợp tinh tế và tươi mát!",
        image01: product_06_imgage_01,
        categorySlug: "tra-chai-an-do",
        slug: "tra-black-peach",
    },
    {
        id: 7,
        title: "TRÀ RỒNG 4 HOA - TRÀ XANH THỦ CÔNG",
        origin: "Trung Quốc",
        price: 480,
        describe: "Trà xanh ấn tượng được lựa chọn đặc biệt được làm sống động với hương hoa nhài tinh tế. Trà có hoa dền, hoa nhài, hoa cúc và hoa oải hương.",
        image01: product_07_imgage_01,
        categorySlug: "tra-xanh",
        slug: "tra-rong-4-hoa",
    },
    {
        id: 8,
        title: "TRÀ HOA ĐẬU BIẾC",
        origin: "Thái Lan",
        price: 420,
        describe: "Trà hoa đậu biếc là một loài hoa Clitoria ternatea, tiếng Tây Ban Nha gọi là Conchita azul.",
        image01: product_08_imgage_01,
        categorySlug: "tra-xanh",
        slug: "tra-hoa-dau-biec",
    },
    {
        id: 9,
        title: "TRÀ THẢO DƯỢC CASABLANCA",
        origin: "Anh",
        price: 180,
        describe: "Táo, tầm xuân, chanh dây, mâm xôi, dâu tây, kiwi lát, cơm cháy, dâm bụt, cánh hoa hướng dương.",
        image01: product_09_imgage_01,
        categorySlug: "tra-thao-moc",
        slug: "tra-thao-duoc-Casablanca",
    },

    {
        id: 10,
        title: "TRÀ HOA OẢI HƯƠNG VÀ HOA HỒNG",
        origin: "Địa TRung Hải",
        price: 180,
        describe: "Sự kết hợp tinh tế của Hoa cúc, Hoa oải hương và Hoa hồng với hương cuối là Rooibos.",
        image01: product_10_imgage_01,
        categorySlug: "tra-rooibos",
        slug: "tra-hoa-oai-huong-va-hoa-hong",
    },

    {
        id: 11,
        title: "TRÀ XANH HOA HỒNG ANH ĐÀO",
        origin: "Địa TRung Hải",
        price: 180,
        describe: "Trà xanh hữu cơ, cánh hoa hồng, quả Andean hữu cơ và nhựa thơm anh đào. \nSự pha trộn giữa trà xanh chất lượng cao có hương vị anh đào ngọt ngào và chút hương hoa hồng tinh tế, mang đến nét đặc trưng kỳ lạ tuyệt vời cho trà.",
        image01: product_11_imgage_01,
        categorySlug: "tra-xanh",
        slug: "tra-xanh-hoa-hong-anh-đao",
    },

    {
        id: 12,
        title: "TRÀ TRẮNG PAI MU TAN",
        origin: "Việt Nam",
        price: 180,
        describe: "Bạch trà có hai lá kén đầu tiên phủ đầy lông trắng và có màu hơi trắng. Nó được gọi là trà trắng do nụ có màu trắng.",
        image01: product_12_imgage_01,
        categorySlug: "bach-tra",
        slug: "tra-trang-Pai-Mu-Tan",
    },

    {
        id: 13,
        title: "TRÀ ORIENTAL BEAUTY Ô LONG",
        origin: "Trung Quốc",
        price: 480,
        describe: "Vẻ đẹp phương Đông một loại trà ô long với nhiều tên gọi và câu chuyện. Bai Hao (White Tip) Oolong dịch là 'trà ô long đầu trắng' và là do số lượng nụ trắng cao được sử dụng để pha chế loại trà này.",
        image01: product_13_imgage_01,
        categorySlug: "bach-tra",
        slug: "tra-oriental-beauty-o-long",
    },

    {
        id: 14,
        title: "TRÀ ĐEN EARL GREY",
        origin: "Địa TRung Hải",
        price: 180,
        describe: "Trà đen hữu cơ với dầu cam bergamota. Một hương thơm báo trước một hương vị đáng kinh ngạc. Chúng tôi đã nói đi nói lại nhiều lần. Đây là Earl Grey tuyệt nhất tôi từng có trong đời!",
        image01: product_14_imgage_01,
        categorySlug: "tra-rooibos",
        slug: "tra-den-Earl-Grey",
    },
    {
        id: 15,
        title: "TRÀ VANILLA CHAI",
        origin: "Ấn Độ",
        price: 180,
        describe: "Trà đen, gừng, bạch đậu khấu, quế, đinh hương, tiêu đen, tiêu ngọt, hoa hồi với một chút hương vani vùng Amazon. Vanila từ Amazon, với một chút gừng, được tạo điểm nhấn bởi kẹo bạch đậu khấu.",
        image01: product_15_imgage_01,
        categorySlug: "tra-chai-an-do",
        slug: "tra-Vanilla-Chai",
    },
    {
        id: 16,
        title: "TRÀ Ô LONG NHO",
        origin: "Đài Loan",
        price: 180,
        describe: "Oloong kết hợp với nho chín đỏ.",
        image01: product_16_imgage_01,
        categorySlug: "tra-o-long",
        slug: "tra-o-long-nho",
    },
    {
        id: 17,
        title: "TRÀ CHOCOLATE BẠC HÀ",
        origin: "Ấn độ",
        price: 180,
        describe: "Lá bạc hà, ngòi cacao và trà đen. Bạc hà tươi tuyệt đẹp kết hợp với hạt cacao và trà đen Keemun",
        image01: product_17_imgage_01,
        categorySlug: "tra-chai-an-do",
        slug: "tra-Chocolate-bac-ha",
    },
    {
        id: 18,
        title: "TRÀ SUNSHINE LEMON",
        origin: "Trung Quốc",
        price: 180,
        describe: "Rooibos, cánh hoa cúc vạn thọ và vỏ chanh. Nước chanh tiếp thêm sinh lực cho hương vị của Rooibos. Tuyệt vời với đá và trang trí bằng chanh.",
        image01: product_18_imgage_01,
        categorySlug: "tra-rooibos",
        slug: "tra-Sunshine-Lemon",
    },

    {
        id: 19,
        title: "TRÀ MATCH CEREMONIAL GRADE",
        origin: "Nhật Bản",
        price: 480,
        describe: "Trà Matcha - Đẳng cấp nghi lễ",
        image01: product_19_imgage_01,
        categorySlug: "tra-matcha",
        slug: "tra-Matcha-Ceremonial-Grade",
    },

    {
        id: 20,
        title: "TRÀ MATCH CULINARY GRADE",
        origin: "Nhật Bản",
        price: 280,
        describe: "Trà Matcha - Đẳng cấp nghi lễ",
        image01: product_20_imgage_01,
        categorySlug: "tra-matcha",
        slug: "tra-Matcha-Culinary-Grade",
    },
];

const getAllProducts = () => products;

const getProductById = (id) =>
    productData.getAllProducts().find((element) => element.id === id);

const getProductBySlug = (slug) =>
    productData.getAllProducts().find((element) => element.slug === slug);

const getProductsByCateSlug = (cate) =>
    productData
        .getAllProducts()
        .filter((element) => element.categorySlug === cate);

const getProducts = (count) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
};

const productData = {
    getAllProducts,
    getProductById,
    getProductBySlug,
    getProductsByCateSlug,
    getProducts,
};

export default productData;