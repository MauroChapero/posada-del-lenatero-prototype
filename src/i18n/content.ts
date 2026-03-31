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
            description: "Disfrutá de conectividad sin interrupciones en todo el establecimiento con nuestra red de fibra óptica.",
        },
        {
            name: "Desayuno Continental",
            icon: "coffee",
        },
        {
            name: "Estacionamiento Larga Estadía",
            icon: "car",
            description: "Estacionamiento privado y seguro disponible para tu vehículo durante tu viaje.",
            hasCta: true,
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
            description: "Enjoy seamless connectivity throughout the entire premises with our fiber optic network.",
        },
        {
            name: "Continental Breakfast",
            icon: "coffee",
        },
        {
            name: "Long-Term Parking",
            icon: "car",
            description: "Secure private parking available for your vehicle during your trip.",
            hasCta: true,
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
import bedroomImg from "@assets/showcase/bedroom.webp";
import breakfastImg from "@assets/showcase/breakfast.webp";
import bathroomImg from "@assets/showcase/bathroom.webp";
import gardenImg from "@assets/showcase/garden.webp";

export const showcaseImagesI18n: Record<Locale, ShowcaseImage[]> = {
    es: [
        { src: bedroomImg, alt: "Suite Principal de Lujo" },
        { src: breakfastImg, alt: "Desayuno Gourmet" },
        { src: bathroomImg, alt: "Baño Privado Moderno" },
        { src: gardenImg, alt: "Área de Relax al Aire Libre" },
    ],
    en: [
        { src: bedroomImg, alt: "Luxurious Master Suite" },
        { src: breakfastImg, alt: "Gourmet Breakfast" },
        { src: bathroomImg, alt: "Modern Private Bathroom" },
        { src: gardenImg, alt: "Outdoor Relax Area" },
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
