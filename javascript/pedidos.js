let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
}

function updateCart() {
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
            <button class="remove" data-index="${index}">Remover</button>
        `;

        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);

    document.querySelectorAll(".remove").forEach(btn => {
        btn.onclick = (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            saveCart();
            updateCart();
        };
    });

    saveCart();
}

document.querySelectorAll(".add").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);

        cart.push({ name, price });

        saveCart();
        updateCart();
    });
});

document.getElementById("finalizar").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    const newOrder = {
        id: Date.now(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + item.price, 0),
        date: new Date().toLocaleString()
    };

    orders.push(newOrder);
    saveOrders();

    cart = [];
    saveCart();
    updateCart();

    alert("Pedido enviado para a cozinha ☕🔥");

    window.location.href = "./pages/pedidos.html";
});