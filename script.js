const products = [
    {
        id: '1',
        name: 'Wireless Headphones',
        description: 'Premium noise-canceling wireless headphones with superior sound quality.',
        price: 199.99,
        images: [
            'http://127.0.0.1:5500/images/h1.jpg',
            'http://127.0.0.1:5500/images/h.png'       
        ]
    },
    {
        id: '2',
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with health tracking and notifications.',
        price: 299.99,
        images: [
            'http://127.0.0.1:5500/images/watch1.webp',
            'http://127.0.0.1:5500/images/watch2.webp'
        ]
    },
    {
        id: '3',
        name: 'Laptop Backpack',
        description: 'Durable and water-resistant backpack with laptop compartment.',
        price: 79.99,
        images: [
            'http://127.0.0.1:5500/images/bag1.jpg',
            'http://127.0.0.1:5500/images/bag2.jpg'
        ]
    },
    {
        id: '4',
        name: 'Drone with Camera',
        description: 'Lightweight drone with 4K camera and intelligent flight modes.',
        price: 499.99,
        images: [
            'http://127.0.0.1:5500/images/drone1.jpg',
            'http://127.0.0.1:5500/images/drone2.jpg'
        ]
    },
    {
        id: '5',
        name: 'Coffee Maker',
        description: 'Programmable coffee maker with thermal carafe.',
        price: 129.99,
        images: [
            'http://127.0.0.1:5500/images/coffee2.jpg',
            'http://127.0.0.1:5500/images/coffee1.webp'
        ]
    },
    {
        id: '6',
        name: 'Augmented Reality Glasses',
        description: 'Next-gen AR glasses that bring digital content into the real world with immersive visuals.',
        price: 399.99,
        images: [
            'http://127.0.0.1:5500/images/glass2.webp',
            'http://127.0.0.1:5500/images/glass1.webp'
        ]
    },
    {
        id: '7',
        name: 'AI-Powered Smart Mirror',
        description: 'A futuristic smart mirror with weather updates, fitness tracking, and personal assistant features.',
        price: 599.99,
        images: [
            'http://127.0.0.1:5500/images/ai1.webp',
            'http://127.0.0.1:5500/images/ai1.jpg'
        ]
    },
    {
        id: '8',
        name: 'Smart Hydroponic Planter',
        description: 'An automated indoor planter that grows fresh herbs and vegetables with minimal effort.',
        price: 249.99,
        images: [
            'http://127.0.0.1:5500/images/smart1.jpg',
            'http://127.0.0.1:5500/images/smart2.jpg'
        ]
    },
    {
        id: '10',
        name: 'Tanjiro Kamado’s Nichirin Sword',
        description: 'A black blade representing the Water and Sun Breathing techniques.',
        price: 299.99,
        images: [
            'http://127.0.0.1:5500/images/t2.jpg',
            'http://127.0.0.1:5500/images/t1.webp'
            
        ]
    },
    {
        id: '11',
        name: 'Inosuke Hashibira’s Dual Nichirin Swords',
        description: 'Jagged-edged dual blades used in Beast Breathing style.',
        price: 349.99,
        images: [
            'http://127.0.0.1:5500/images/i1.webp',
            'http://127.0.0.1:5500/images/i2.webp'
        ]
    },
    {
        id: '12',
        name: 'Kyōjurō Rengoku’s Flame Nichirin Sword',
        description: 'A fiery red blade with an ornate guard symbolizing Flame Breathing.',
        price: 399.99,
        images: [
            'http://127.0.0.1:5500/images/r1.jpeg',
            'http://127.0.0.1:5500/images/r2.webp'
        ]
    },
    {
        id: '13',
        name: 'Sanemi Shinazugawa’s Wind Nichirin Sword',
        description: 'A green blade with a claw-like guard, representing Wind Breathing.',
        price: 349.99,
        images: [
            'http://127.0.0.1:5500/images/s1.jpeg',
            'http://127.0.0.1:5500/images/s2.webp'
        ]
    },
    {
        id: '14',
        name: 'Zenitsu Agatsuma’s Thunder Nichirin Sword',
        description: 'A yellow blade with a lightning pattern for Thunder Breathing.',
        price: 329.99,
        images: [
            'http://127.0.0.1:5500/images/z1.webp',
            'http://127.0.0.1:5500/images/z2.webp'
        ]
    },
    {
        id: '15',
        name: 'Giyu Tomioka’s Water Nichirin Sword',
        description: 'A deep blue blade flowing like water, used in Water Breathing.',
        price: 349.99,
        images: [
            'http://127.0.0.1:5500/images/giyu_sword.png',
            'http://127.0.0.1:5500/images/giyu_sword3.jpg'
        ]
    }
];


let cart = [];

const productsGrid = document.querySelector(".products-grid");
const cartItems = document.querySelector(".cart-items");
const cartContainer = document.querySelector('.cart-container');
const totalAmount = document.querySelector('.total-amount');
const clearCartBtn = document.querySelector('.clear-cart-btn');
const checkoutBtn = document.querySelector('.checkout-btn');

lucide.createIcons();

// Render products
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <!-- Image Slider -->
            <div class="product-image-slider">
                <button class="prev-btn" onclick="changeImage('${product.id}', 'prev')">❮</button>
                <img src="${product.images[1]}" alt="${product.name}" class="product-image" id="image-${product.id}">
                <button class="next-btn" onclick="changeImage('${product.id}', 'next')">❯</button>
            </div>

            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                        <i data-lucide="plus"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinitialize icons for newly added elements
    lucide.createIcons();
}


function changeImage(productId, direction) {
    const product = products.find(p => p.id === productId);
    const imageElement = document.getElementById(`image-${productId}`);
    
    // Get the current image index
    const currentImageIndex = product.images.indexOf(imageElement.src);
    
    let newImageIndex;
    
    if (direction === 'next') {
        newImageIndex = (currentImageIndex + 1) % product.images.length;
    } else {
        newImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
    }
    
    // Set the new image
    imageElement.src = product.images[newImageIndex];
}



// Render cart
function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i data-lucide="shopping-cart" size="48"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.product.name}</h3>
                    <p class="cart-item-price">$${item.product.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.product.id}', ${item.quantity - 1})">
                        <i data-lucide="minus"></i>
                    </button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.product.id}', ${item.quantity + 1})">
                        <i data-lucide="plus"></i>
                    </button>
                    <button class="remove-item-btn" onclick="removeFromCart('${item.product.id}')">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
    
    // Reinitialize icons for newly added elements
    lucide.createIcons();
}


function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    const existingItem = cart.find(item => item.product.id === productId);

    if (existingItem) {
        updateQuantity(productId, existingItem.quantity + 1);
    } else {
        cart.push({ product, quantity: 1 });
        renderCart();
    }

}

function updateQuantity(productId, quantity) {
    if (quantity < 1) return;

    const itemIndex = cart.findIndex(item => item.product.id === productId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = quantity;
        renderCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    renderCart();
}

//For Clear Cart
function clearCart() {
    if (cart.length === 0) {
        alert("Your Cart is already Empty.");
    }
    cart = [];
    renderCart();
}

//Initialize
function init() {
    renderProducts();
    renderCart();

    //Event Listeners
    clearCartBtn.addEventListener('click', clearCart);
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Thanks for Your Purchase.');
            clearCart();
        }
    });
}

// Start
init();
