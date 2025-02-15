// Mock product data
const products = [
    {
        id: 1,
        name: "Neon Dreams",
        description: "Electronic fusion album featuring ambient soundscapes",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1587731556938-38755b4803a6",
        category: "Electronic",
        type: "album",
        artist: "Quantum Pulse"
    },
    {
        id: 2,
        name: "Vintage Vibes",
        description: "Classic rock compilation album",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
        category: "Rock",
        type: "album",
        artist: "The Retros"
    },
    {
        id: 3,
        name: "Professional Studio Microphone",
        description: "High-quality condenser microphone for studio recording",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1615297658577-dc5cec88e81a",
        category: "Equipment",
        type: "equipment"
    },
    {
        id: 4,
        name: "Electric Guitar",
        description: "Professional electric guitar with vintage finish",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1501721664212-9d88ff5103d9",
        category: "Equipment",
        type: "equipment"
    }
];

// Function to render product cards
function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    container.innerHTML = productList.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                ${product.artist ? <p class="artist">by ${product.artist}</p> : ''}
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}
