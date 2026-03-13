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