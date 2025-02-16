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

// Promo codes---------------------------------------------------------
const promoCodes = {
    'ostad10': { discount: 0.10, description: '10% discount' },
    'ostad5': { discount: 0.05, description: '5% discount' }
};
//----------------------------------------------------------------------

// Cart state
let cart = [];
let appliedPromoCode = null;//---------------------------------------

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const cartItems = document.querySelector('.cart-items');
const subtotalAmount = document.querySelector('.subtotal-amount');
const discountRow = document.querySelector('.discount-row');
const discountAmount = document.querySelector('.discount-amount');
const totalAmount = document.querySelector('.total-amount');
const clearCartBtn = document.querySelector('.clear-cart-btn');
const checkoutBtn = document.querySelector('.checkout-btn');
const promoInput = document.querySelector('#promoCode');//---------------------------------------
const applyPromoBtn = document.querySelector('.apply-promo-btn');//------------------------------
const promoMessage = document.querySelector('.promo-message');//---------------------------------


const productTemplate = document.querySelector('#product-template');
const cartItemTemplate = document.querySelector('#cart-item-template');
const emptyCartTemplate = document.querySelector('#empty-cart-template');

// Initialize Lucide icons
lucide.createIcons();

// Create element from template
function createElementFromTemplate(template) {
    return template.content.cloneNode(true).firstElementChild;
}

// Render products
function renderProducts() {
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const element = createElementFromTemplate(productTemplate);
        element.querySelector('.product-image').src = product.images[0];
        element.querySelector('.product-image').alt = product.name;
        element.querySelector('.product-image').id = `image-${product.id}`;
        element.querySelector('.product-name').textContent = product.name;
        element.querySelector('.product-description').textContent = product.description;
        element.querySelector('.product-price').textContent = `$${product.price.toFixed(2)}`;
        element.querySelector('.prev-btn').addEventListener('click', () => changeImage(product.id, 'prev'));
        element.querySelector('.next-btn').addEventListener('click', () => changeImage(product.id, 'next'));
        element.querySelector('.add-to-cart-btn').addEventListener('click', () => addToCart(product.id));

        productsGrid.appendChild(element);
    });
    lucide.createIcons();
}

// Image slider functionality
function changeImage(productId, direction) {
    const product = products.find(p => p.id === productId);
    const imageElement = document.getElementById(`image-${productId}`);
    const currentSrc = imageElement.src;

    const currentIndex = product.images.findIndex(img => img === currentSrc);
    let newIndex;

    if (direction === 'next') {
        newIndex = (currentIndex + 1) % product.images.length;
    } else {
        newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    }

    imageElement.src = product.images[newIndex];
}

// Calculate cart totals
function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    let discount = 0;

    if (appliedPromoCode && promoCodes[appliedPromoCode]) {//-----------------------------------------
        discount = subtotal * promoCodes[appliedPromoCode].discount;//-----------------------------------------
    }

    const total = subtotal - discount;

    subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;

    if (discount > 0) {
        discountRow.classList.remove('hidden');
        discountAmount.textContent = `-$${discount.toFixed(2)}`;
    } else {
        discountRow.classList.add('hidden');
    }

    totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Render cart
function renderCart() {
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        const emptyCart = createElementFromTemplate(emptyCartTemplate);
        cartItems.appendChild(emptyCart);
        discountRow.classList.add('hidden');
        appliedPromoCode = null;//-----------------------------------------
        promoInput.value = '';
        promoMessage.innerHTML = '';
    } else {
        cart.forEach(item => {
            const element = createElementFromTemplate(cartItemTemplate);

            // Set cart item data
            element.querySelector('.cart-item-image').src = item.product.images[0];
            element.querySelector('.cart-item-image').alt = item.product.name;
            element.querySelector('.cart-item-name').textContent = item.product.name;
            element.querySelector('.cart-item-price').textContent = `$${item.product.price.toFixed(2)}`;
            element.querySelector('.cart-item-quantity').textContent = item.quantity;

            // Add event listeners
            element.querySelector('.decrease').addEventListener('click', () =>
                updateQuantity(item.product.id, item.quantity - 1));
            element.querySelector('.increase').addEventListener('click', () =>
                updateQuantity(item.product.id, item.quantity + 1));
            element.querySelector('.remove-item-btn').addEventListener('click', () =>
                removeFromCart(item.product.id));

            cartItems.appendChild(element);
        });
    }

    calculateTotals();
    lucide.createIcons();
}

// Cart operations
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
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

function clearCart() {
    if (cart.length === 0) {
        alert("Your Cart is already Empty.");
        return;
    }
    cart = [];
    renderCart();
}

// Promo code handling--------------------------------------------------------------------------
function applyPromoCode() {
    const code = promoInput.value.trim().toLowerCase();

    if (cart.length === 0) {
        promoMessage.innerHTML = '<span class="error"><b>Your cart is empty</b></span>';
        return;
    }

    if (appliedPromoCode) {
        promoMessage.innerHTML = '<span class="error">A promo code is already applied</span>';
        return;
    }

    if (promoCodes[code]) {
        appliedPromoCode = code;
        const discount = promoCodes[code].discount * 100;
        promoMessage.innerHTML = `<span class="success">Promo code applied: ${discount}% off</span>`;
        renderCart();
    } else {
        promoMessage.innerHTML = '<span class="error">Invalid promo code</span>';
    }
}
//-----------------------------------------------------------------------------------------------------

function init() {
    // Event listeners
    clearCartBtn.addEventListener('click', clearCart);
    applyPromoBtn.addEventListener('click', applyPromoCode);//-----------------------------------------
    promoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            applyPromoCode();//-----------------------------------------
        }
    });
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            const discount = appliedPromoCode ? `with ${promoCodes[appliedPromoCode].description}` : '';//-----------------------------------------
            alert(`Thank you for your purchase! ${discount}`);
            clearCart();
        } else {
            alert("There is Nothing in Cart.");
        }
    });
    renderProducts();
    renderCart();
}

// Start the app
init();