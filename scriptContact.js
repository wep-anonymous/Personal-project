$(".logo").hover(
    function () {
        $(this).css("transform", "rotate(12deg)"); // Rotate to 15 degrees on hover
    },
    function () {
        $(this).css("transform", "rotate(0deg)"); // Rotate back to 0 degrees when not hovered
    }
);

const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');
const iconLinks = document.querySelectorAll('.icon-link');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navlist.classList.toggle('active');

    if (navlist.classList.contains('active')) {
        // Clear existing links to avoid duplicates
        const existingNavLinks = navlist.querySelectorAll('.dynamic-navlink');
        existingNavLinks.forEach(link => link.remove());

        iconLinks.forEach(link => {
            link.style.display = 'none';  // Hide the original icon links
        });

        // Create new navigation links for mobile view
        const linksData = [
            { href: 'cart.html', text: '購物車' },
            { href: 'account.html', text: '帳戶' }
        ];

        linksData.forEach(linkData => {
            const newLink = document.createElement('a');
            newLink.href = linkData.href;
            newLink.className = 'navlink dynamic-navlink'; // Add a class for dynamic links
            newLink.textContent = linkData.text;
            navlist.appendChild(newLink);
        });
    } else {
        iconLinks.forEach(link => {
            link.style.display = 'inline-block';  // Restore original icon links
        });
        // Optionally, you can remove the dynamic links when closing the menu
        const dynamicLinks = navlist.querySelectorAll('.dynamic-navlink');
        dynamicLinks.forEach(link => link.remove());
    }
}

hamburger.addEventListener('click', toggleMenu);

// Ensure correct icon display on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 868) {
        iconLinks.forEach(link => {
            link.innerHTML = link.href.includes('cart.html') ?
                '<i class="fas fa-shopping-cart"></i>' : '<i class="fas fa-user"></i>';
        });
    }
});



// Close the nav and overlay when the overlay itself is clicked
// overlay.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navlist.classList.remove('active');
//     overlay.classList.remove('active');
// });

// Ensure correct icon display on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 868) {
        iconLinks.forEach(link => {
            link.innerHTML = link.href.includes('cart.html') ?
                '<i class="fas fa-shopping-cart"></i>' : '<i class="fas fa-user"></i>';
        });
    }
});

// ---------------------------------------------------------------------------


document.querySelectorAll(".navlink").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const page = this.getAttribute("href"); // Get the page from href attribute
        window.location.href = page; // Navigate to the specified page
    });
});

const form = document.querySelector('.contact-form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your logic to send the form data to a server or display a success message
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    form.classList.add('hidden');
    successMessage.classList.remove('hidden');
});

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
