//Welcome Screen
let welcome = document.querySelector('#welcome')
let mulWelcome = document.querySelector('.multiple-welcome')
let html = document.querySelector('html')
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    mulWelcome.classList.add('fade')
  }, 2000);
  setTimeout(() => {
    welcome.style.top = '-200vh'
  }, 2000)
  setTimeout(() => {
    mulWelcome.style.display = 'none';
  }, 2000)
  setTimeout(() => {
    html.style.overflow = 'initial'
  }, 3000)
})

// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll Section Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  // Sticky Navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when section click (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-contents, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .skills-bar', { origin: 'right' });

// Typed JS
let typed;
typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Photographer', 'Painter'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

typed = new Typed('.multiple-welcome', {
  strings: ['Namaste'],
  typeSpeed: 100,
  fadeOut: true,
  fadeOutDelay: true
})

// skill active button

let skillbtn = document.querySelector('.btn-box').querySelectorAll('button');
let skillcontent = document.querySelector('.skills-contents').querySelectorAll('.content');
console.log(skillcontent);
// console.log(skillBtn);

skillbtn.forEach(element => {
  element.addEventListener('click', function () {
    skillbtn.forEach(nav => nav.classList.remove('active'))
    skillcontent.forEach(nav => nav.classList.remove('active'))


    this.classList.add('active')
    if (this.getAttribute('id') == 'btn1') {
      skillcontent[0].classList.add('active')
      skillcontent[0].style.transitionDelay = '0.3s'
    } else if (this.getAttribute('id') == 'btn2') {
      skillcontent[1].classList.add('active')
      skillcontent[1].style.transitionDelay = '0.3s'
    } else if (this.getAttribute('id') == 'btn3') {
      skillcontent[2].classList.add('active')
      skillcontent[2].style.transitionDelay = '0.3s'
    } else {
      console.log("");
    }
  })
})
