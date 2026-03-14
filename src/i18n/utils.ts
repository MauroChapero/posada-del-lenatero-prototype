import { ui } from "./ui";

export const defaultLocale = "es";
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

/** Extracts the locale from the current URL path. */
export function getLocaleFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split("/");
    if (lang && locales.includes(lang as Locale)) return lang as Locale;
    return defaultLocale;
}

/** Returns a translation function for the given locale. */
export function useTranslations(locale: Locale) {
    return function t(key: keyof (typeof ui)[typeof defaultLocale]): string {
        return ui[locale]?.[key] ?? ui[defaultLocale][key];
    };
}

/** Returns the path prefix for the given locale. */
export function getLocalePath(locale: Locale): string {
    return locale === defaultLocale ? "" : `/${locale}`;
}

/** 
 * Returns the localized country name based on its 2-letter ISO code.
 * Falls back to the uppercase code if translation is unavailable.
 */
export function getCountryName(countryCode: string, locale: Locale): string {
    try {
        const displayNames = new Intl.DisplayNames([locale], { type: 'region' });
        return displayNames.of(countryCode.toUpperCase()) || countryCode.toUpperCase();
    } catch (e) {
        return countryCode.toUpperCase();
    }
}
