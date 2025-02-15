// Cart state
let cart = [];

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId,
            quantity: 1
        });
    }

    updateCart();
    showToast('Added to cart');
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <h4>${product.name}</h4>
                    <p>$${product.price}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.productId}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.productId}, ${item.quantity + 1})">+</button>
                        <button onclick="removeFromCart(${item.productId})" class="remove-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product.price * item.quantity);
    }, 0);

    cartTotal.textContent = $${total.toFixed(2)};
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCart();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    updateCart();
    showToast('Item removed from cart');
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
