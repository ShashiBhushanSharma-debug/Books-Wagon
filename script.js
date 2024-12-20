// Dynamic Content Loader
function loadDynamicContent() {
    const categories = ['Fiction', 'Non-Fiction', 'Science', 'Romance', 'Mystery'];
    const featuredBooks = [
        { title: 'Book Title 1', author: 'Author Name 1', price: '₹500', image: 'book1.jpg' },
        { title: 'Book Title 2', author: 'Author Name 2', price: '₹450', image: 'book2.jpg' },
        { title: 'Book Title 3', author: 'Author Name 3', price: '₹600', image: 'book3.jpg' },
    ];

    const categoriesContainer = document.getElementById('categories-container');
    const featuredBooksContainer = document.getElementById('featured-books-container');

    // Load Categories
    categories.forEach(category => {
        categoriesContainer.innerHTML += `
            <div class="col-md-3 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${category}</h5>
                        <p class="card-text">Explore books in ${category} category.</p>
                        <a href="#" class="btn btn-outline-primary">View More</a>
                    </div>
                </div>
            </div>
        `;
    });

    // Load Featured Books
    featuredBooks.forEach(book => {
        featuredBooksContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card shadow-sm">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                        <p class="card-text">Price: ${book.price}</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// Search Functionality
function searchBooks(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value;
    alert(`Searching for: ${searchInput}`);
}

// Contact Form Submission
function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
}

// Event Listener for Dynamic Content
document.addEventListener('DOMContentLoaded', loadDynamicContent);
// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulated login process
    alert(`Welcome back! Email: ${email}`);
});

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulate login validation
    alert(`Logged in as: ${email}`);
});

// Sign-Up Form Submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate sign-up process
    alert(`Account created successfully for ${name}!`);
});
