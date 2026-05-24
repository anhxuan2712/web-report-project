let SanPham = [
    { ten: "Apple Watch Ultra 2", man:'1.92" OLED', pin:"564mAh", loai: "watch", gia: "20.000.000đ", anh: "../images/AppleWatch.png" },
    { ten: "ASUS ROG Phone 9", man:'6.78" AMOLED 185Hz', pin:"4000mAh", loai: "phone", gia: "18.000.000đ", anh: "../images/asus1.png" },
    { ten: "ASUS TUF F15", man:'16" FHD+/WUXGA', pin:"90Wh", loai: "laptop", gia: "25.000.000đ", anh: "../images/AsusTUF.png" },
    { ten: "ASUS Vivobook 15", man:'15.6" FHD', pin:"76Wh", loai: "laptop", gia: "22.000.000đ", anh: "../images/AsusVivobook.png" },
    { ten: "Google Pixel 9 Pro", man:'6.3" OLED 120Hz', pin:"4700mAh", loai: "phone", gia: "17.000.000đ", anh: "../images/google1.png" },
    { ten: "iPad Air M4", man:'1.5" Retina', pin:"36Wh", loai: "tablet", gia: "9.000.000đ", anh: "../images/IpadAirM4.png" },
    { ten: "iPhone 15 Pro Max", man:'6.7" Super Retina XDR OLED', pin:"5000mAh", loai: "phone", gia: "30.000.000đ", anh: "../images/iphone1.png" },
    { ten: "Lenovo LOQ 15", man:'15.6" FHD', pin:"60Wh", loai: "laptop", gia: "18.000.000đ", anh: "../images/LenovoLOQ.png" },
    { ten: "MacBook Pro 16 M4", man:'16.2" Liquid Retina XDR', pin:"100Wh", loai: "laptop", gia: "25.000.000đ", anh: "../images/MacBookpro.png" },
    { ten: "Microsoft Surface Pro 11", man:'13" PixelSense 120Hz', pin:"48Wh", loai: "tablet", gia: "16.550.000đ", anh: "../images/MicrosoftSurface pro11.png" },
    { ten: "OPPO Find N5", man:'6.3" OLED 120Hz', pin:"5600mAh", loai: "phone", gia: "25.900.000đ", anh: "../images/oppo1.png" },
    { ten: "Rog Strix", man:'16" ROG Nebula 2.5K', pin:"90Wh", loai: "laptop", gia: "19.900.000đ", anh: "../images/Rogstrix.png" },
    { ten: "Samsung Galaxy S25 Ultra", man:'6.9" AMOLED 120Hz', pin:"5000mAh", loai: "phone", gia: "33.000.000đ", anh: "../images/samsung1.png" },
    { ten: "Samsung Galaxy Z Flip 7", man:'120Hz', pin:"4300mAh", loai: "phone", gia: "23.999.000đ", anh: "../images/samsung2.png" },
    { ten: "Samsung Galaxy Z Fold 7", man:'7.6" gập, 120Hz', pin:"6000mAh", loai: "phone", gia: "36.400.000đ", anh: "../images/samsung3.png" },
    { ten: "Samsung Galaxy Tab S9 Ultra", man:'14.6" AMOLED 120Hz', pin:"30Wh", loai: "tablet", gia: "11.000.000đ", anh: "../images/SamsungGalaxyTab.png" },
    { ten: "HUAWEI Watch GT 5 Pro", man:'AMOLED 1.43"', pin:"524mAh", loai: "watch", gia: "13.600.000đ", anh: "../images/WatchHUAWEI.png" },
    { ten: "Samsung Galaxy Watch Ultra", man:'1.5" AMOLED', pin:"590mAh", loai: "watch", gia: "13.999.000đ", anh: "../images/WatchSamsung.png" },
    { ten: "Xiaomi 15 Ultra", man:'6.73" AMOLED 120Hz', pin:"6000mAh", loai: "phone", gia: "50.000.000đ", anh: "../images/xiaomi1.png" },
    { ten: "Xiaomi Pad", man:'11" FHD+', pin:"840mAh", loai: "tablet", gia: "16.110.000đ", anh: "../images/XiaomiPad.png" }
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

// Khi mở web
HienThi(SanPham);