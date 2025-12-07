// MOBILE NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });

  navMobile.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");
    });
  });
}

// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function handleScroll() {
  const scrollPos = window.scrollY + 120;
  let currentId = "";

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === `#${currentId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// SCROLL TOP BUTTON
const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 260) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ANIMATE SKILL BARS WHEN VISIBLE
const skillBars = document.querySelectorAll(".skill-bar");

if ("IntersectionObserver" in window && skillBars.length) {
  const obs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const level = bar.getAttribute("data-level");
          const fill = bar.querySelector(".skill-bar-fill");
          if (fill) {
            fill.style.width = level + "%";
          }
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillBars.forEach((bar) => obs.observe(bar));
} else {
  // Fallback: just set width if IntersectionObserver not supported
  skillBars.forEach((bar) => {
    const level = bar.getAttribute("data-level");
    const fill = bar.querySelector(".skill-bar-fill");
    if (fill) {
      fill.style.width = level + "%";
    }
  });
}

// SET CURRENT YEAR IN FOOTER
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
