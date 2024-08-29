// Lightbox Effect for Gallery
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.createElement('div');
const lightboxImage = document.createElement('img');

lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
lightbox.appendChild(lightboxImage);

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImage.src = image.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Music List Hover Effect
const songList = document.querySelectorAll('#music ul li');
songList.forEach(song => {
    song.addEventListener('mouseover', () => {
        song.style.color = '#ff69b4';
    });
    song.addEventListener('mouseout', () => {
        song.style.color = '#333';
    });
});

// Contact Form Modal Popup
const contactButton = document.querySelector('#contactForm button');
const contactForm = document.querySelector('#contactForm');
const modal = document.createElement('div');
const modalContent = document.createElement('div');
const closeModal = document.createElement('span');

modal.id = 'modal';
modalContent.id = 'modal-content';
closeModal.id = 'close-modal';

closeModal.innerHTML = '&times;';
closeModal.style.fontSize = '24px';
closeModal.style.cursor = 'pointer';
closeModal.style.position = 'absolute';
closeModal.style.right = '15px';
closeModal.style.top = '10px';

modalContent.appendChild(closeModal);
modalContent.appendChild(contactForm);
modal.appendChild(modalContent);
document.body.appendChild(modal);

contactButton.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Automatic Slideshow for Gallery
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
