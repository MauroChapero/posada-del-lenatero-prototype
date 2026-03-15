export interface RateIcon {
    src: string;
    altKey: `'rates.alt.${string}'` | string;
    colSpan?: number;
}

export interface Rate {
    id: string;
    titleKey: `'rates.${string}'` | string;
    price: string;
    icons: RateIcon[];
    isPopular?: boolean;
    descriptionKey?: `'rates.${string}'` | string;
    layout?: "family" | "standard";
}
