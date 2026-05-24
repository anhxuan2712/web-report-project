let SanPham = [
    { ten: "iPhone 15", loai: "phone", gia: "20.000.000đ", anh: "../images/iphone.jpg" },
    { ten: "Samsung S24", loai: "phone", gia: "18.000.000đ", anh: "../images/samsung.jpg" },
    { ten: "MacBook Air", loai: "laptop", gia: "25.000.000đ", anh: "../images/macbook.jpg" },
    { ten: "Dell XPS", loai: "laptop", gia: "22.000.000đ", anh: "../images/dell.jpg" },
    { ten: "iPad Pro", loai: "tablet", gia: "17.000.000đ", anh: "../images/ipad.jpg" },
    { ten: "Apple Watch", loai: "watch", gia: "9.000.000đ", anh: "../images/watch.jpg" },
    { ten: "Apple Watch", loai: "watch", gia: "9.000.000đ", anh: "../images/watch.jpg" }
];

let LoaiDangChon = "all";

function HienThi(ds) {
    let box = document.getElementById("product-list");
    box.innerHTML = "";

    if (ds.length == 0) {
        box.innerHTML = "<h2>Không có sản phẩm</h2>";
        return;
    }

    for (let i = 0; i < ds.length; i++) {
        box.innerHTML +=
        '<div class="product-card">' +
            '<img src="' + ds[i].anh + '">' +
            '<h3>' + ds[i].ten + '</h3>' +
            '<p>' + ds[i].gia + '</p>' +
            '<button>Add to Cart</button>' +
        '</div>';
    }
}

function filterProducts(loai) {
    LoaiDangChon = loai;
    HienThi(SanPham);
}

function searchProducts() {
    let tuKhoa = document.getElementById("searchBox").value.toLowerCase();
    let KetQua = [];

    for (let i = 0; i < SanPham.length; i++) {
        if (
            SanPham[i].ten.toLowerCase().includes(tuKhoa) &&
            (LoaiDangChon == "all" || SanPham[i].loai == LoaiDangChon)
        ) {
            KetQua.push(SanPham[i]);
        }
    }

    HienThi(KetQua);
}
HienThi(SanPham);