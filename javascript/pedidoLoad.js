let orders = JSON.parse(localStorage.getItem("orders")) || [];

const container = document.getElementById("orders-container");

function renderOrders() {
    container.innerHTML = "";

    if (orders.length === 0) {
        container.innerHTML = "<p>Nenhum pedido ainda.</p>";
        return;
    }

    orders.forEach((order, index) => {
        const div = document.createElement("div");

        let itemsHTML = order.items.map(item => 
            `<li>${item.name} - R$ ${item.price.toFixed(2)}</li>`
        ).join("");

        div.innerHTML = `
            <div class="order-card">
                <h3>Pedido #${order.id}</h3>
                <ul>${itemsHTML}</ul>
                <p><strong>Total:</strong> R$ ${order.total.toFixed(2)}</p>

                <button onclick="removeOrder(${index})">Finalizar Pedido</button>
            </div>
        `;

        container.appendChild(div);
    });
}

function removeOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    renderOrders();
}

renderOrders();