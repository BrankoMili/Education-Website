// Change NAVBAR styles on scroll (Visible,invisible navigation bar background on scroll)

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer (Frequently Asked Questions section)

const faqs = document.querySelectorAll(".frequently");

faqs.forEach((frequently) => {
  frequently.addEventListener("click", () => {
    frequently.classList.toggle("open");

    // change icon (plus or minus icon depending on click)
    const icon = frequently.querySelector(".frequently__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

//show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

const ivisiblebtn = () => {
  if (window.innerWidth >= 1024) {
    menu.style.display = "flex";
    menu.style.gap = 4;
    closeBtn.style.display = "none";
    menuBtn.style.display = "none";
  } else {
    menuBtn.style.display = "flex";
    menu.style.display = "none";
  }
};

window.addEventListener("resize", ivisiblebtn);
