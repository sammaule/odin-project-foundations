const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks(); // Call displayBooks after adding a book
    
    // Clear the form
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
    
    // Close the modal
    closeModal();
}

function displayBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; // Clear existing books to prevent duplicates
    
    if (myLibrary.length === 0) {
        booksContainer.innerHTML = '<p style="text-align: center; color: #666; font-style: italic; margin: 2rem 0;">No books in your library yet. Click "New Book" to add one!</p>';
        return;
    }
    
    myLibrary.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card';
        bookElement.innerHTML = `
            <div class="book-header">
                <h3>${book.title}</h3>
                <button class="remove-btn" onclick="removeBook('${book.id}')" title="Remove book">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3,6 5,6 21,6"></polyline>
                        <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </button>
            </div>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <span class="book-status ${book.read ? 'read' : 'not-read'} clickable" 
                  onclick="toggleReadStatus('${book.id}')" 
                  title="Click to toggle read status">
                ${book.read ? '✓ Read' : '○ Not Read'}
            </span>
        `;
        booksContainer.appendChild(bookElement);
    });
}

function removeBook(bookId) {
    // Show confirmation dialog
    if (confirm('Are you sure you want to remove this book from your library?')) {
        // Find the index of the book to remove
        const bookIndex = myLibrary.findIndex(book => book.id === bookId);
        
        if (bookIndex !== -1) {
            // Remove the book from the array
            myLibrary.splice(bookIndex, 1);
            // Refresh the display
            displayBooks();
        }
    }
}

function toggleReadStatus(bookId) {
    // Find the book in the library
    const book = myLibrary.find(book => book.id === bookId);
    
    if (book) {
        // Toggle the read status
        book.read = !book.read;
        // Refresh the display to show the updated status
        displayBooks();
    }
}

// Modal Functions
function openModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.add('show');
    
    // Focus on first input
    setTimeout(() => {
        document.getElementById('title').focus();
    }, 300);
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    modal.classList.remove('show');
    
    // Clear form when closing
    document.getElementById('book-form').reset();
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('book-form');
    
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const pages = parseInt(document.getElementById('pages').value);
        const read = document.getElementById('read').checked;
        
        // Validate inputs
        if (!title || !author || !pages || pages < 1) {
            alert('Please fill in all required fields correctly.');
            return;
        }
        
        // Add the book
        addBookToLibrary(title, author, pages, read);
    });
    
    // Handle escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Initial display
    displayBooks();
});

