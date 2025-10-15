// Menu placing order
document.addEventListener('DOMContentLoaded', () => {
    const cart = []; // Array to hold items in the cart
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const placeOrderButton = document.getElementById('place-order');

    // Handle 'Add to Cart' button clicks
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            // Add item to cart
            cart.push({ name: itemName, price: itemPrice });

            // Update cart display
            updateCartDisplay();
        });
    });

    // Update cart display
    function updateCartDisplay() {
        // Clear current cart display
        cartItemsList.innerHTML = '';

        let total = 0;
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="cart-item-name">${item.name}</span> 
                <span class="cart-item-price">₹${item.price.toFixed(2)}</span>
                <span class="remove-item" data-index="${index}">×</span>
            `;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        // Update total price
        cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
        
        // Add event listeners to remove item buttons
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                cart.splice(index, 1); // Remove item from cart array
                updateCartDisplay(); // Update cart display after removal
            });
        });
    }

    // Handle 'Place Order' button click
    placeOrderButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your order!');
            cart.length = 0; // Clear cart
            updateCartDisplay(); // Update cart display
        }
    });
});

// Upcoming events (modal and form handling)
document.addEventListener('DOMContentLoaded', () => {
    const registerButtons = document.querySelectorAll('.register-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');  // Cross icon
    const form = document.getElementById('register-form');

    // Show the modal when the 'Register Now' button is clicked
    registerButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Ensure that close-modal is available before adding the event listener
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            console.log('Close icon clicked');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    } else {
        console.log("Close icon not found!");
    }

    // Handle form submission
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Thank you for registering!');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
        form.reset();
    });

    // Optional: Close modal when clicking outside of the modal content (overlay)
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});




// Select all Register Now buttons
const registerButtons = document.querySelectorAll(".register-btn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

// Open modal on button click
registerButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
        document.body.classList.add("modal-open");
    });
});

// Close modal when clicking the cross
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

// Handle form submission (optional)
document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Registration Successful!");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});




// Optional: handle form submission
// document.getElementById('contact-form').addEventListener('submit', function(e){
//     e.preventDefault(); // prevent default submission
//     // You can handle sending form data via AJAX or leave it for server-side processing
//     this.reset(); // reset form fields after submit
// });

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault(); // Prevent default form submission

    // Show browser alert
    alert("Thank you! Your message has been sent successfully.");

    // Reset form fields
    this.reset();
});
