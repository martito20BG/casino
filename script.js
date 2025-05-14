document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Благодарим ви за резервацията! Ще се свържем с вас за потвърждение.');
    this.reset();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.menu-img.slide');
    const leftArrow = document.querySelector('.menu-arrow.left');
    const rightArrow = document.querySelector('.menu-arrow.right');
    let currentImageIndex = 0;
  
    function updateImage() {
      slides.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
      });
  
      leftArrow.style.display = currentImageIndex === 0 ? 'none' : 'block';
      rightArrow.style.display = currentImageIndex === slides.length - 1 ? 'none' : 'block';
    }
  
    window.nextMenuPage = function () {
      if (currentImageIndex < slides.length - 1) {
        currentImageIndex++;
        updateImage();
      }
    };
  
    window.prevMenuPage = function () {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage();
      }
    };
  
    updateImage();
  });
  
  
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

