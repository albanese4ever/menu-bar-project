const container = document.getElementById("drinks-container");
const tabs = document.querySelectorAll(".tabs button");

const viewCartBtn = document.getElementById("view-cart");
const cartPanel = document.getElementById("cart-panel");
const closeCart = document.getElementById("close-cart");
const cartItemRemove = document.getElementById("cart-item-remove");

const cartItemsDiv = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

const overlay = document.getElementById("overlay");
const orderIdSpan = document.getElementById("order-id");
const tableSpan = document.getElementById("table-id");
const continueBtn = document.getElementById("continue-btn");
const sendBtn = document.getElementById("send-order");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* TABLE */

const params = new URLSearchParams(window.location.search);
let table = params.get("table") || "—";
tableSpan.textContent = table;

/* RENDER */

function renderDrinks(list) {

    container.innerHTML = "";

    list.forEach(drink => {

        const card = document.createElement("div");
        card.className = "drink-card";

        card.innerHTML = `
        <div class="image">
            <img src="${drink.image}">
            <span class="price">€${drink.price}</span>
        </div>

        <div class="info">
            <h3>${drink.name}</h3>
            <p class="desc">${drink.description}</p>
            <button class="add-btn">+ Add to Order</button>
        </div>
        `;

        card.querySelector(".add-btn").onclick = () => addToCart(drink);

        container.appendChild(card);

    });
}

function filterByCategory(cat) {
    renderDrinks(DRINKS.filter(d => d.category === cat));
}

tabs.forEach(btn => {
    btn.onclick = () => {
        tabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filterByCategory(btn.dataset.cat);
    };
});

filterByCategory("Cocktails");

/* CART */

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(drink) {

    const found = cart.find(i => i.name === drink.name);

    if (found) found.qty++;
    else cart.push({ ...drink, qty: 1 });

    updateCart();
}

function updateCart() {

    cartItemsDiv.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.qty;
        count += item.qty;

        const row = document.createElement("div");
        row.className = "cart-item";

        row.innerHTML = `
            <div class="cart-top">
                <div>
                    <button id="cart-item-remove">X</button>
                    <strong>${item.name}</strong><br>
                    €${item.price} per uno
                </div>

                <div>
                    <button class="qty-btn minus">-</button>
                    ${item.qty}
                    <button class="qty-btn plus">+</button>
                </div>

                <div>€${(item.price * item.qty).toFixed(2)}</div>
            </div>

            <div class="note-box">
                <textarea placeholder="Nota...">${item.note || ""}</textarea>
            </div>
        `;

        row.querySelector(".plus").onclick = () => {
            item.qty++;
            updateCart();
        };

        row.querySelector(".minus").onclick = () => {
            item.qty--;
            if (item.qty === 0) {
                cart = cart.filter(d => d.name !== item.name);
            }
            updateCart();
        };

        row.querySelector("textarea").oninput = e => {
            item.note = e.target.value;
            saveCart();
        };

        cartItemsDiv.appendChild(row);

    });

    cartCount.textContent = count;
    cartTotal.textContent = "€" + total.toFixed(2);

    saveCart();
}


/* OPEN CART */

viewCartBtn.onclick = () => cartPanel.style.right = "0";
closeCart.onclick = () => cartPanel.style.right = "-420px";

cartItemRemove.onclick() = () => cart = cart.filter(d => d.name !== item.name);

/* SEND ORDER */

sendBtn.onclick = async () => {

    if (!cart.length) return;

    const id = "F" + Math.floor(Math.random() * 900000 + 100000);

    const order = {
        orderId: id,
        table: table,
        total: cartTotal.textContent,
        items: cart,
        createdAt: new Date().toISOString()
    };

    try {

        await fetch("http://192.168.1.27:3000/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        });

        orderIdSpan.textContent = id;

        cart = [];
        updateCart();

        cartPanel.style.right = "-420px";
        overlay.classList.add("show");

    } catch {

        alert("Server offline. Avvisa il personale!");

    }
};

continueBtn.onclick = () => overlay.classList.remove("show");

updateCart();
