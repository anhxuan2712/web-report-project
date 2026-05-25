let gioHang = JSON.parse(localStorage.getItem("gioHang")) || [];

function hienThiGioHang() {
    let box = document.getElementById("cart-list");
    let tongTien = 0;

    box.innerHTML = "";

    if (gioHang.length == 0) {
        box.innerHTML = "<h2>Giỏ hàng trống</h2>";
        document.getElementById("total-price").innerHTML = "Tổng tiền: 0đ";
        return;
    }

    for (let i = 0; i < gioHang.length; i++) {
        box.innerHTML +=
        '<div class="cart-item">' +
            '<img src="' + gioHang[i].anh + '">' +
            '<div class="cart-info">' +
                '<h3>' + gioHang[i].ten + '</h3>' +
                '<p>' + gioHang[i].gia + '</p>' +
            '</div>' +
            '<button onclick="xoaSanPham(' + i + ')">Xóa</button>' +
        '</div>';

        tongTien += parseInt(gioHang[i].gia.replace(/\./g, "").replace("đ", ""));
    }

    document.getElementById("total-price").innerHTML =
        "Tổng tiền: " + tongTien.toLocaleString() + "đ";
}

function xoaSanPham(index) {
    gioHang.splice(index, 1);

    localStorage.setItem("gioHang", JSON.stringify(gioHang));

    hienThiGioHang();
}

hienThiGioHang();
document.getElementById("checkoutBtn").addEventListener("click", function(){
    alert("Thanh toán thành công!");
});