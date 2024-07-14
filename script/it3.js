const galleryContainer = document.querySelector('.gallery-container');
const images = document.querySelectorAll('.gallery img');
let currentImageIndex = 0;
const slideInterval = 3000; // Adjusted slide interval

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const slideAmount = -currentImageIndex * 100;
    galleryContainer.style.transform = `translateX(${slideAmount}%)`;
}

setInterval(nextImage, slideInterval);