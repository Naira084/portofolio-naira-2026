// 1. manggil hamburger menu
// 2. manggil navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    const isOpen = navbar.classList.toggle('active');
    menuIcon.setAttribute('aria-expanded', isOpen);
    menuIcon.querySelector('i').classList.toggle('ri-close-line');
    menuIcon.querySelector('i').classList.toggle('ri-menu-line');
};

// Typed JS (untuk mengubah isi teks)
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer Student', 'Creative Thinker', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

var prevScrollpos = window.pageYOffset;   // tambahin baris ini
let ticking = false;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.add('show');
      } else {
        document.getElementById("header").classList.remove('show');
      }
      prevScrollpos = currentScrollPos;
      ticking = false;
    });
    ticking = true;
  }
};

const header = document.getElementById('header');
document.body.style.paddingTop = header.offsetHeight + 'px';

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');

document.querySelectorAll('.portofolio-box').forEach(box => {
    box.addEventListener('click', () => {
        lightboxImg.src = box.dataset.img;
        lightboxTitle.textContent = box.dataset.title;
        lightboxDesc.textContent = box.dataset.desc;
        lightbox.classList.add('active');
    });
});

function closeLightbox() {
    lightbox.classList.remove('active');
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxBackdrop').addEventListener('click', closeLightbox);

const fabContainer = document.querySelector('.fab-container');
const fabMain = document.getElementById('fabMain');

fabMain.addEventListener('click', () => {
    fabContainer.classList.toggle('active');
});

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {   // muncul setelah scroll lebih dari 400px
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});