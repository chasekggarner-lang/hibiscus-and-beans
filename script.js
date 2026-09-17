// =========================
// SMOOTH SCROLLING
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================
// SECTION REVEAL
// =========================

const revealItems = document.querySelectorAll(
    ".section-heading, .menu-card, .about-content, .contact-content, .menu-group"
);

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealItems.forEach(item => {
    item.classList.add("reveal");
    revealObserver.observe(item);
});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// =========================
// CURRENT YEAR
// =========================

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {
    const year = new Date().getFullYear();

    footerYear.textContent =
        `© ${year} Hibiscus & Beans. All rights reserved.`;
}
/* =========================
   HERO SLIDESHOW
========================= */

const heroSlides = document.querySelectorAll(".hero-slide");
const heroIndicators = document.querySelectorAll(
    ".hero-slider-indicator span"
);

let currentHeroSlide = 0;

function showHeroSlide(index) {

    heroSlides.forEach((slide) => {
        slide.classList.remove("active");
    });

    heroIndicators.forEach((indicator) => {
        indicator.classList.remove("active");
    });

    heroSlides[index].classList.add("active");

    if (heroIndicators[index]) {
        heroIndicators[index].classList.add("active");
    }
}

function nextHeroSlide() {

    currentHeroSlide++;

    if (currentHeroSlide >= heroSlides.length) {
        currentHeroSlide = 0;
    }

    showHeroSlide(currentHeroSlide);
}

if (heroSlides.length > 0) {
    setInterval(nextHeroSlide, 5000);
}