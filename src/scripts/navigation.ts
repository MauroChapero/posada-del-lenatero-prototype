// Mobile menu navigation logic

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll<HTMLAnchorElement>(".mobile-link");

const LG_BREAKPOINT = 1024;

/** Opens the mobile menu and locks body scroll. */
function openMenu(): void {
    if (!mobileMenu || !menuToggle) return;

    mobileMenu.classList.remove("translate-x-full");
    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

/** Closes the mobile menu and restores body scroll. */
function closeMenu(): void {
    if (!mobileMenu || !menuToggle) return;

    mobileMenu.classList.add("translate-x-full");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

/** Toggles the mobile menu open/closed. */
function toggleMenu(): void {
    if (!mobileMenu) return;
    const isOpen = !mobileMenu.classList.contains("translate-x-full");
    isOpen ? closeMenu() : openMenu();
}

// Hamburger button click
menuToggle?.addEventListener("click", toggleMenu);

// Close menu when a nav link is clicked
menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// Close menu on Escape key (WCAG keyboard accessibility)
document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileMenu && !mobileMenu.classList.contains("translate-x-full")) {
        closeMenu();
        menuToggle?.focus(); // Return focus to the toggle button
    }
});

// Auto-close menu when viewport crosses the lg breakpoint (e.g. tablet rotation)
window.addEventListener("resize", () => {
    if (window.innerWidth >= LG_BREAKPOINT && mobileMenu && !mobileMenu.classList.contains("translate-x-full")) {
        closeMenu();
    }
});
