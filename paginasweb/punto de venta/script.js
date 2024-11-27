// Archivo: script.js

// Carrito inicial vacío
let cart = [];

// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
    // Selecciona la cantidad del producto
    const quantity = parseInt(event.target.previousElementSibling.value);

    // Añade el producto al carrito
    cart.push({ name: productName, price: productPrice, quantity: quantity });

    // Actualiza el carrito en la interfaz
    updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');

    // Vacía la lista del carrito antes de agregar los elementos
    cartItems.innerHTML = '';

    // Recorre los productos en el carrito y actualiza la lista
    let totalAmount = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        // Agrega el elemento a la lista
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}`;
        cartItems.appendChild(li);
    });

    // Muestra el total de la compra
    total.innerText = `Total: $${totalAmount}`;
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    updateCart();
}