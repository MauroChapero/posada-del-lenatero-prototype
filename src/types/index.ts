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
    label: string;
    value: number;
    note: string;
}

export interface ShowcaseImage {
    src: string;
    alt: string;
    class: string;
}