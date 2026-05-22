let products = [
    {
        name: "iPhone 15",
        category: "phone",
        price: "20.000.000đ",
        image: "images/iphone.jpg"
    },
    {
        name: "Samsung S24",
        category: "phone",
        price: "18.000.000đ",
        image: "images/samsung.jpg"
    },
    {
        name: "MacBook Air",
        category: "laptop",
        price: "25.000.000đ",
        image: "images/macbook.jpg"
    },
    {
        name: "Dell XPS",
        category: "laptop",
        price: "22.000.000đ",
        image: "images/dell.jpg"
    },
    {
        name: "iPad Pro",
        category: "tablet",
        price: "17.000.000đ",
        image: "images/ipad.jpg"
    },
    {
        name: "Apple Watch",
        category: "watch",
        price: "9.000.000đ",
        image: "images/watch.jpg"
    }
];

let currentCategory = "all";

function displayProducts(list) {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (list.length === 0) {
        productList.innerHTML = "<h2>Không tìm thấy sản phẩm</h2>";
        return;
    }

    list.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });
}

function filterProducts(category) {
    currentCategory = category;
    applyFilter();
}

function searchProducts() {
    applyFilter();
}

function applyFilter() {
    let keyword = document.getElementById("searchBox").value.toLowerCase();

    let filteredProducts = products.filter(product => {
        let matchName = product.name.toLowerCase().includes(keyword);
        let matchCategory = currentCategory === "all" || product.category === currentCategory;

        return matchName && matchCategory;
    });

    displayProducts(filteredProducts);
}

displayProducts(products);