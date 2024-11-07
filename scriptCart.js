$(".title-link").hover(
    function () {
        $(this).css("transform", "rotate(12deg)"); // Rotate to 15 degrees on hover
    },
    function () {
        $(this).css("transform", "rotate(0deg)"); // Rotate back to 0 degrees when not hovered
    }
);


document.querySelectorAll(".navlink").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const page = this.getAttribute("data-page"); // Get the page from data attribute
        window.location.href = page; // Navigate to the specified page
    });
});

// Function to update the total price of the cart
function updateCartTotal() {
    let total = 0;

    // Loop through each row in the table body
    document.querySelectorAll('tbody tr').forEach(row => {
        const price = parseFloat(row.children[1].innerText.replace('$', ''));
        const quantity = parseInt(row.querySelector('.quantity input').value);
        const rowTotal = price * quantity;

        // Update the row total
        row.children[3].innerText = `$${rowTotal.toFixed(2)}`;
        total += rowTotal;
    });

    // Update the overall total price in the cart
    document.querySelector('.total-price').innerText = `總計: $${total.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeItem(event) {
    event.preventDefault();
    const row = event.target.closest('tr');
    row.remove();
    updateCartTotal();
}

// Add event listeners for quantity changes and remove buttons
document.querySelectorAll('.quantity input').forEach(input => {
    input.addEventListener('change', () => {
        if (input.value < 1) input.value = 1;
        updateCartTotal();
    });
});

document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', removeItem);
});

// Initial call to set the total on page load
updateCartTotal();


// ---------------------------------------------------------------------
$(document).ready(function () {
    // Handle click events on footer links
    $(".link").on("click", function (event) {
        // event.preventDefault(); // Prevent default link behavior
        let url = $(this).data("url"); // Get the URL from the data attribute
        window.location.href = url; // Redirect to the URL
    });

    // Handle click events on social media icons
    $(".social").on("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        let url = $(this).data("url"); // Get the URL from the data attribute
        window.open(url, "_blank"); // Open the URL in a new tab
    });
});

// -----------------------------------------------------------------------