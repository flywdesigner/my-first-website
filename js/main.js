document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.collection-banner.carousel img');
    if (carouselImages.length > 0) {
        let currentIndex = 0;
        setInterval(() => {
            // Remove active class from current image
            carouselImages[currentIndex].classList.remove('active');
            
            // Update index
            currentIndex = (currentIndex + 1) % carouselImages.length;
            
            // Add active class to next image
            carouselImages[currentIndex].classList.add('active');
        }, 2000); // 2 seconds interval
    }
});