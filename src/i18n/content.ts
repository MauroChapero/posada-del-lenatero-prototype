/**
 * Localized versions of data constants that contain translatable text.
 * Reviews are NOT localized since they are real user-generated content.
 */
import type { Locale } from "./utils";
import type { NavLink, Service, Rating, ShowcaseImage, ContactInfo, FooterCredits } from "@types";

// ── Nav Links ──────────────────────────────────────────────
export const navLinksI18n: Record<Locale, NavLink[]> = {
    es: [
        { name: "Inicio", href: "#home" },
        { name: "Tarifas", href: "#rates" },
        { name: "Nosotros", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Galería", href: "#showcases" },
        { name: "Reseñas", href: "#reviews" },
    ],
    en: [
        { name: "Home", href: "#home" },
        { name: "Rates", href: "#rates" },
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Showcase", href: "#showcases" },
        { name: "Reviews", href: "#reviews" },
    ],
};

// ── Services ───────────────────────────────────────────────
export const servicesI18n: Record<Locale, Service[]> = {
    es: [
        {
            name: "WiFi de Alta Velocidad",
            icon: "wifi",
            description: "Disfrutá de conectividad sin interrupciones en todo el establecimiento con nuestra red de fibra óptica dedicada.",
        },
        {
            name: "Desayuno Continental",
            icon: "coffee",
            description: "Empezá tu mañana con nuestra selección de productos locales frescos y café premium.",
        },
        {
            name: "Bar de Bebidas",
            icon: "glass",
            description: "Una selección curada de bebidas incluyendo gaseosas, cervezas premium y agua con o sin gas.",
        },
        {
            name: "Entretenimiento",
            icon: "tv",
            description: "Relajate con tu Smart TV y disfrutá de una experiencia cinematográfica completa desde la comodidad de tu habitación.",
        },
    ],
    en: [
        {
            name: "High-Speed WiFi",
            icon: "wifi",
            description: "Enjoy seamless connectivity throughout the entire premises with our dedicated fiber optic network.",
        },
        {
            name: "Continental Breakfast",
            icon: "coffee",
            description: "Start your morning beautifully with our signature selection of fresh local products and premium coffee.",
        },
        {
            name: "Refreshment Bar",
            icon: "glass",
            description: "A curated selection of beverages including soft drinks, premium beers, and sparkling or still water.",
        },
        {
            name: "Entertainment",
            icon: "tv",
            description: "Relax with your Smart TV and enjoy a full cinematic experience from the comfort of your room.",
        },
    ],
};

// ── Ratings ────────────────────────────────────────────────
export const ratingsI18n: Record<Locale, Rating[]> = {
    es: [
        { title: "Limpieza", value: 100, note: "Excelente", label: "Puntuación de limpieza" },
        { title: "Confort", value: 98, note: "Premium", label: "Puntuación de comodidad" },
        { title: "Ubicación", value: 96, note: "Hermosa", label: "Puntuación de ubicación" },
        { title: "Instalaciones", value: 100, note: "Muy Satisfechos", label: "Puntuación de instalaciones" },
    ],
    en: [
        { title: "Cleanliness", value: 100, note: "Excellent", label: "Puntuación de limpieza" },
        { title: "Comfort", value: 98, note: "Premium", label: "Puntuación de comodidad" },
        { title: "Location", value: 96, note: "Beautiful", label: "Puntuación de ubicación" },
        { title: "Facilities", value: 100, note: "Highly Satisfied", label: "Puntuación de instalaciones" },
    ],
};

// ── Showcase ───────────────────────────────────────────────
export const showcaseImagesI18n: Record<Locale, ShowcaseImage[]> = {
    es: [
        { src: "/images/showcase/bedroom.webp", alt: "Suite Principal de Lujo" },
        { src: "/images/showcase/breakfast.webp", alt: "Desayuno Gourmet" },
        { src: "/images/showcase/bathroom.webp", alt: "Baño Privado Moderno" },
        { src: "/images/showcase/garden.webp", alt: "Área de Relax al Aire Libre" },
    ],
    en: [
        { src: "/images/showcase/bedroom.webp", alt: "Luxurious Master Suite" },
        { src: "/images/showcase/breakfast.webp", alt: "Gourmet Breakfast" },
        { src: "/images/showcase/bathroom.webp", alt: "Modern Private Bathroom" },
        { src: "/images/showcase/garden.webp", alt: "Outdoor Relax Area" },
    ],
};

// ── Footer ─────────────────────────────────────────────────
export const contactDetailsI18n: Record<Locale, ContactInfo[]> = {
    es: [
        {
            label: "Email de contacto",
            value: "chaperomauro1803@gmail.com",
            href: "mailto:chaperomauro1803@gmail.com",
            icon: "mdi:email-outline",
        },
        {
            label: "Encontranos",
            value: "Circunscripción 1° Secc 1°, Mza 29, Casa 15, Cdad. Evita, Buenos Aires",
            href: "https://maps.app.goo.gl/HbdhDvFHmuUseW6SA",
            icon: "mdi:map-marker-outline",
            isExternal: true,
        },
    ],
    en: [
        {
            label: "Contact Email",
            value: "chaperomauro1803@gmail.com",
            href: "mailto:chaperomauro1803@gmail.com",
            icon: "mdi:email-outline",
        },
        {
            label: "Find us",
            value: "Circunscripción 1° Secc 1°, Mza 29, Casa 15, Cdad. Evita, Buenos Aires",
            href: "https://maps.app.goo.gl/HbdhDvFHmuUseW6SA",
            icon: "mdi:map-marker-outline",
            isExternal: true,
        },
    ],
};

export const footerCredits: FooterCredits = {
    brand: "Posada Del Leñatero",
    year: "2016",
    author: "Mauro Chapero",
    authorUrl: "https://github.com/MauroChapero",
};
