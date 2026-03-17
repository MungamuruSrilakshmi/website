function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item + " added to cart!");
}

window.onload = function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let list = document.getElementById("cartList");

    if (list) {
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    }
}
