// Mobile menu navigation logic

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll<HTMLAnchorElement>(".mobile-link");

/** Bloquea el evento por defecto (usado para deshabilitar scroll). */
function preventDefault(e: Event): void {
    e.preventDefault();
}

/** Abre o cierra el menú móvil y gestiona el bloqueo de scroll. */
function toggleMenu(): void {
    if (!mobileMenu || !menuToggle) return;

    const isMenuOpen = !mobileMenu.classList.contains("translate-x-full");

    if (isMenuOpen) {
        // CERRAR
        mobileMenu.classList.add("translate-x-full");
        menuToggle.classList.remove("active");

        // Habilitamos el scroll de nuevo
        window.removeEventListener("wheel", preventDefault);
        window.removeEventListener("touchmove", preventDefault);
    } else {
        // ABRIR
        mobileMenu.classList.remove("translate-x-full");
        menuToggle.classList.add("active");

        // Bloqueamos el scroll del "fondo" pero permitimos el del menú
        window.addEventListener("wheel", preventDefault, { passive: false });
        window.addEventListener("touchmove", preventDefault, { passive: false });
    }
}

menuToggle?.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Importante: Liberar el scroll antes de navegar
        window.removeEventListener("wheel", preventDefault);
        window.removeEventListener("touchmove", preventDefault);

        mobileMenu?.classList.add("translate-x-full");
        menuToggle?.classList.remove("active");
    });
});
