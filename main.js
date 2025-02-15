// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Render featured products
    const featuredProducts = products.slice(0, 3);
    renderProducts('featured-products', featuredProducts);
});
