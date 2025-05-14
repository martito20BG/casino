document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Благодарим ви за резервацията! Ще се свържем с вас за потвърждение.');
    this.reset();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const imagePaths = [
      'images/menu.png',
      'images/salati.png',
      'images/predqstiq.png',
      'images/pasta i rizoto.png',
      'images/osnovni.png',
      'images/plata i desert.png',
      'images/kokteili i napitki.png',
      'images/napitki2.png',
      'images/krai.png',
    ];
  
    let currentImageIndex = 0;
    const menuImage = document.getElementById('menuImage');
    const leftArrow = document.querySelector('.menu-arrow.left');
    const rightArrow = document.querySelector('.menu-arrow.right');
  
    function updateImage() {
      menuImage.src = imagePaths[currentImageIndex];
  
      if (currentImageIndex === 0) {
        leftArrow.style.display = 'none';
      } else {
        leftArrow.style.display = 'block';
      }
  
      if (currentImageIndex === imagePaths.length - 1) {
        rightArrow.style.display = 'none';
      } else {
        rightArrow.style.display = 'block';
      }
    }
  
    window.nextMenuPage = function () {
      if (currentImageIndex < imagePaths.length - 1) {
        currentImageIndex++;
        updateImage();
      }
    }
  
    window.prevMenuPage = function () {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage();
      }
    }
  
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

