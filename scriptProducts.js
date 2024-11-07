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

document.querySelectorAll(".navlink").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const page = this.getAttribute("href"); // Get the page from href attribute
        window.location.href = page; // Navigate to the specified page
    });
});

// ----------------------------banner--------------------------------


const products = {
    A: [
        { id: 'a1', image: '/Picture/可麗露.jpg', name: '可麗露' },
        { id: 'a2', image: '/Picture/拿破崙草莓千層.jpg', name: '拿破崙草莓千層' },
        { id: 'a3', image: '/Picture/法國香料多菓蛋糕.jpg', name: '法國香料多菓蛋糕' },
        { id: 'a4', image: '/Picture/法國香草蘭姆烤布丁塔.jpg', name: '法國香草蘭姆烤布丁塔' },
        { id: 'a5', image: '/Picture/綜合野莓塔.jpg', name: '綜合野莓塔' },
        { id: 'a6', image: '/Picture/黑醋粟厚生巧克力.jpg', name: '黑醋粟厚生巧克力' },
        { id: 'a7', image: '/Picture/黑醋粟古典巧克力蛋糕.jpg', name: '黑醋粟古典巧克力蛋糕' },
        { id: 'a8', image: '/Picture/軟心蘭姆厚布朗尼.jpg', name: '軟心蘭姆厚布朗尼' },
    ],
    B: [
        { id: 'b1', image: '/Picture/酸土鳳梨酥.jpg', name: '酸土鳳梨酥' },
        { id: 'b2', image: '/Picture/杏仁棒.jpg', name: '杏仁棒' },
        { id: 'b3', image: '/Picture/豆沙鬆糕.jpg', name: '豆沙鬆糕' },
        { id: 'b4', image: '/Picture/桂花和果子.jpg', name: '桂花和果子' },
        { id: 'b5', image: '/Picture/金棗串.jpg', name: '金棗串' },
        { id: 'b6', image: '/Picture/杏仁棒.jpg', name: '杏仁棒' },
    ],
    C: [
        { id: 'c1', image: '/Picture/咖哩麵包.jpg', name: '咖哩麵包' },
        { id: 'c2', image: '/Picture/宇治抹茶馬卡餅.jpg', name: '宇治抹茶馬卡餅' },
        { id: 'c3', image: '/Picture/鹹三明治.jpg', name: '鹹三明治' },
        { id: 'c4', image: '/Picture/馬玲薯臘腸鹹派.jpg', name: '馬玲薯臘腸鹹派' },
        { id: 'c5', image: '/Picture/洋葱培根鹹派.jpg', name: '洋葱培根鹹派' },
        { id: 'c6', image: '/Picture/薑餅許願娃.jpg', name: '薑餅許願娃' },
    ],
    D: [
        { id: 'd1', image: '/Picture/法國小金桔果泥軟糖.jpg', name: '法國小金桔果泥軟糖' },
        { id: 'd2', image: '/Picture/法國果泥棒棒軟糖-綜合.jpg', name: '法國果泥棒棒軟糖-綜合' },
        { id: 'd3', image: '/Picture/法國果泥糖.jpg', name: '法國果泥糖' },
        { id: 'd4', image: '/Picture/法國果泥軟糖-黑巧克力.jpg', name: '法國果泥軟糖-黑巧克力' },
        { id: 'd5', image: '/Picture/法國芒果果泥軟糖.jpg', name: '法國芒果果泥軟糖' },
        { id: 'd6', image: '/Picture/法國黑醋粟果泥軟糖.jpg', name: '法國黑醋粟果泥軟糖' },
    ],
};

const sectionButtons = document.querySelectorAll('.section-btn');
const productGrid = document.getElementById('product-grid');

let activeSection = 'A';
showProducts(products[activeSection]);

sectionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        if (section !== activeSection) {
            activeSection = section;
            showProducts(products[activeSection]);
            updateButtonActive(btn);
        }
    });
});

function showProducts(productData) {
    productGrid.innerHTML = '';

    productData.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');

        const productName = document.createElement('h3');
        productName.classList.add('product-name');
        productName.textContent = product.name;

        productDetails.appendChild(productName);
        productItem.appendChild(img);
        productItem.appendChild(productDetails);
        productGrid.appendChild(productItem);
    });
}

function updateButtonActive(activeBtn) {
    sectionButtons.forEach(btn => {
        btn.classList.remove('bg-blue-500', 'text-white');
    });
    activeBtn.classList.add('bg-blue-500', 'text-white');
}

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