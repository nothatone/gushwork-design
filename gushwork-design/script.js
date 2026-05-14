// Product images for carousel
let images = [
    "assets1/images/1.jpg",
"assets1/images/2.jpg",
"assets1/images/3.jpg"
];

// Current image index
let currentImage = 0;

// Selecting elements
let mainImage = document.getElementById("mainImage");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let thumbs = document.querySelectorAll(".thumb");
let zoomBox = document.getElementById("zoomBox");
let mainImageBox = document.querySelector(".main-image-box");
let topSticky = document.getElementById("topSticky");

// Change image function
function changeImage(index) {
    currentImage = index;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    mainImage.src = images[currentImage];

    thumbs.forEach(function (thumb, thumbIndex) {
        if (thumbIndex === currentImage) {
            thumb.classList.add("active");
        } else {
            thumb.classList.remove("active");
        }
    });
}

// Next image
nextBtn.addEventListener("click", function () {
    changeImage(currentImage + 1);
});

// Previous image
prevBtn.addEventListener("click", function () {
    changeImage(currentImage - 1);
});

// Thumbnail image click
thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
        let index = Number(thumb.getAttribute("data-index"));

        changeImage(index);
    });
});

// Zoom preview on hover
mainImageBox.addEventListener("mousemove", function (event) {
    let box = mainImageBox.getBoundingClientRect();

    let x = ((event.clientX - box.left) / box.width) * 100;
    let y = ((event.clientY - box.top) / box.height) * 100;

    zoomBox.style.backgroundImage = "url(" + images[currentImage] + ")";
    zoomBox.style.backgroundPosition = x + "% " + y + "%";
});

// Sticky header on scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight * 0.75) {
        topSticky.classList.add("show");
    } else {
        topSticky.classList.remove("show");
    }
});

// FAQ accordion
let faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
    let question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
        item.classList.toggle("active");
    });
});

// Application slider
let appSlider = document.getElementById("appSlider");
let appNext = document.getElementById("appNext");
let appPrev = document.getElementById("appPrev");

appNext.addEventListener("click", function () {
    appSlider.scrollBy({
        left: 550,
        behavior: "smooth"
    });
});

appPrev.addEventListener("click", function () {
    appSlider.scrollBy({
        left: -550,
        behavior: "smooth"
    });
});
