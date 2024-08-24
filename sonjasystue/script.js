document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
    });
  }); 

// Hent elementene fra HTML
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightbox-image");
var captionText = document.getElementById("caption");

// Hent alle bildene i galleriet
var galleryItems = document.querySelectorAll(".gallery-item");

// Når et bilde klikkes, åpne lysboksen
galleryItems.forEach(function(item) {
    item.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImage.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Når brukeren klikker på "X", lukk lysboksen
var closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function() {
    lightbox.style.display = "none";
});