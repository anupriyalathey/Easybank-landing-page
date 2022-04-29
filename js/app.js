const togglerBtn = document.querySelector(
    ".main-nav .mobile-nav__toggle button"
  ),
  navItems = document.querySelector(".main-nav__items"),
  overlay = document.querySelector(".mobile-overlay");

let isNavOpen = false;

const toggleNav = () => {
  if (!isNavOpen) {
    navItems.style.display = "block";
    overlay.style.display = "block";
    togglerBtn.innerHTML = `<img src='images/icon-close.svg' alt='Menu Toggle'/>`;
    document.body.style.overflow = "hidden";
  } else {
    togglerBtn.innerHTML = `<img src='images/icon-hamburger.svg' alt='Menu Toggle' />`;
    navItems.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "scroll";
  }

  isNavOpen = !isNavOpen;
};

togglerBtn.addEventListener("click", toggleNav);
