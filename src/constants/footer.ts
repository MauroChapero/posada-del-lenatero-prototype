import type { ContactInfo, FooterCredits } from "@types"

export const contactDetails: ContactInfo[] = [
    {
        label: "Contact Email",
        value: "chaperomauro1803@gmail.com",
        href: "mailto:chaperomauro1803@gmail.com",
        icon: "mdi:email-outline"
    },
    {
        label: "Find us",
        value: "Circunscripción 1° Secc 1°, Mza 29, Casa 15, Cdad. Evita, Buenos Aires",
        href: "https://maps.app.goo.gl/HbdhDvFHmuUseW6SA",
        icon: "mdi:map-marker-outline",
        isExternal: true
    }
]

export const footerCredits: FooterCredits = {
    brand: "Posada Del Leñatero",
    year: "2016",
    author: "Mauro Chapero",
    authorUrl: "https://github.com/MauroChapero"
}