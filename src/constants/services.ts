import type { Service } from '@types';

export const services: Service[] = [
    {
        name: "High-Speed WiFi",
        icon: "wifi",
        description:
            "Enjoy seamless connectivity throughout the entire premises with our dedicated fiber optic network.",
    },
    {
        name: "Continental Breakfast",
        icon: "coffee",
        description:
            "Start your morning beautifully with our signature selection of fresh local products and premium coffee.",
    },
    {
        name: "On-site Parking",
        icon: "car",
        description:
            "Secure on-site parking available for your vehicle during your stay.",
        isAdditional: true,
    },
    {
        name: "Entertainment",
        icon: "tv",
        description:
            "Relax with flat-screen cable TV and a dedicated DVD player for a complete cinematic experience.",
    },
]