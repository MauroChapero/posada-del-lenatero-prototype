export interface Review {
    title: string;
    message: string;
    name: string;
    location: string;
    date: string;
    countryCode: string; // ISO 3166-1 alpha-2 (eg. cl, us, de, etc.)
}