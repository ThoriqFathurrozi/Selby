/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 80,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active");
//     } else {
//       document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);

// active page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
    // console.log(link);
  }
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// card
var swiper = new Swiper(".mySwiper", {
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1110: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var splide = new Splide(".splide1", {
  pagination: false,
  perPage: 3,
  perMove: 1,
});

splide.mount();

var splide = new Splide(".splide2", {
  pagination: false,
  perPage: 3,
  perMove: 1,
});

splide.mount();

var splide = new Splide(".splide3", {
  pagination: false,
  perPage: 9,
  perMove: 1,
});

splide.mount();

// dark mode
let icon = document.getElementById("icon");

// darkmode function
icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  } else {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
    text.classList.remove("dark-mode");
  }
};
