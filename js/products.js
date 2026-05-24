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

// Hiển thị sản phẩm
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
            '<p>Màn: ' + ds[i].man + '</p>' +
            '<p>Pin: ' + ds[i].pin + '</p>' +
            '<p>Giá: ' + ds[i].gia + '</p>' +
            '<button onclick="themVaoGio(\'' + ds[i].ten + '\')">Add to Cart</button>' +
        '</div>';
    }
}

// Filter
function filterProducts(loai) {
    LoaiDangChon = loai;
    searchProducts();
}

// Search + Filter
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

// Add to Cart
function themVaoGio(tenSanPham) {
    let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

    for (let i = 0; i < SanPham.length; i++) {
        if (SanPham[i].ten == tenSanPham) {
            gioHang.push(SanPham[i]);
            break;
        }
    }

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    alert("Đã thêm vào giỏ hàng");
}


HienThi(SanPham);