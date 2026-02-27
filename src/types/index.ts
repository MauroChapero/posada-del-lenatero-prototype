export interface NavLink {
    name: string;
    href: string;
    external?: boolean; // Un ejemplo de propiedad opcional
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface Rating {
    title: string;
    value: number;
    note: string;
    label: string;
}

export interface ShowcaseImage {
    src: string;
    alt: string;
    class: string;
}

export interface Service {
    name: string;
    icon: string;
    description: string;
}

export interface Review {
    title: string;
    message: string;
    name: string;
    location: string;
    date: string;
    countryCode: string; // ISO 3166-1 alpha-2 (eg. cl, us, de, etc.)
}

export interface ContactInfo {
    label: string;
    value: string;
    href: string;
    icon: string;
    isExternal?: boolean
}

export interface FooterCredits {
    brand: string;
    year: string;
    author: string;
    authorUrl: string;
}