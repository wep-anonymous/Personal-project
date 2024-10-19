$(".title-link").hover(
    function () {
        $(this).css("transform", "rotate(12deg)"); // Rotate to 15 degrees on hover
    },
    function () {
        $(this).css("transform", "rotate(0deg)"); // Rotate back to 0 degrees when not hovered
    }
);

document.querySelectorAll(".title-link").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const page = this.getAttribute("data-page"); // Get the page from data attribute
        window.location.href = page; // Navigate to the specified page
    });
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const page = this.getAttribute("data-page"); // Get the page from data attribute
        window.location.href = page; // Navigate to the specified page
    });
});

document.querySelector(".buynow").addEventListener("click", function () {
    window.location.href = "products.html";
});

document.querySelector(".buynow2").addEventListener("click", function () {
    window.location.href = "products.html";
});

document.querySelector(".lessonnow").addEventListener("click", function () {
    window.location.href = "workshop.html";
});

document.addEventListener("DOMContentLoaded", () => {
    // Initialize carousels
    const carousels = [
        {
            images: document.querySelector(".carousel-images-1"),
            prevBtn: document.getElementById("prevBtn1"),
            nextBtn: document.getElementById("nextBtn1"),
            progressBar: document.querySelector(".progress-1"),
            currentIndex: 0
        },
        {
            images: document.querySelector(".carousel-images-2"),
            prevBtn: document.getElementById("prevBtn2"),
            nextBtn: document.getElementById("nextBtn2"),
            progressBar: document.querySelector(".progress-2"),
            currentIndex: 0
        }
    ];

    carousels.forEach((carousel, index) => {
        const totalImages = carousel.images.children.length;
        const visibleImages = 2; // Change as per requirement
        const imageWidth = 500; // Width of each image in px

        function updateCarousel() {
            const offset = -carousel.currentIndex * imageWidth; // Calculate offset for sliding
            carousel.images.style.transform = `translateX(${offset}px)`;

            // Update progress bar
            const progressPercentage =
                ((carousel.currentIndex + 1) / (totalImages - visibleImages + 1)) * 100;
            carousel.progressBar.style.width = `${progressPercentage}%`;
        }

        function showImage(index) {
            if (index >= totalImages - visibleImages + 1) {
                carousel.currentIndex = 0; // Loop back to the start
            } else if (index < 0) {
                carousel.currentIndex = totalImages - visibleImages; // Loop back to the end
            } else {
                carousel.currentIndex = index;
            }

            updateCarousel();
        }

        // Auto-slide every 3 seconds
        setInterval(() => {
            showImage(carousel.currentIndex + 1);
        }, 3000);

        carousel.nextBtn.addEventListener("click", () => {
            showImage(carousel.currentIndex + 1); // Move one image forward
        });

        carousel.prevBtn.addEventListener("click", () => {
            showImage(carousel.currentIndex - 1); // Move one image backward
        });

        // Initialize with the first image visible
        updateCarousel();
    });
});

// $(document).ready(function () {
//     // Handle click events on footer links
//     $(".link").on("click", function (event) {
//         event.preventDefault(); // Prevent default link behavior
//         let url = $(this).data("url"); // Get the URL from the data attribute
//         window.location.href = url; // Redirect to the URL
//     });

//     // Handle click events on social media icons
//     $(".social").on("click", function (event) {
//         event.preventDefault(); // Prevent default link behavior
//         let url = $(this).data("url"); // Get the URL from the data attribute
//         window.open(url, "_blank"); // Open the URL in a new tab
//     });
// });
