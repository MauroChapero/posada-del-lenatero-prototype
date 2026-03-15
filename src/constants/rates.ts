import type { Rate } from "@types";

export const ratesList: Rate[] = [
    {
        id: "standardSingle",
        titleKey: "rates.standardSingle",
        price: "$95 USD",
        icons: [{ src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" }],
    },
    {
        id: "twinComfort",
        titleKey: "rates.twinComfort",
        price: "$110 USD",
        icons: [
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
        ],
    },
    {
        id: "kingSingle",
        titleKey: "rates.kingSingle",
        price: "$105 USD",
        icons: [{ src: "/icons/rates/single-king-bed.webp", altKey: "rates.alt.kingSingleBed" }],
    },
    {
        id: "kingMatrimonial",
        titleKey: "rates.kingMatrimonial",
        price: "$125 USD",
        isPopular: true,
        descriptionKey: "rates.perfectForCouples",
        icons: [{ src: "/icons/rates/king-matrimonial-bed.webp", altKey: "rates.alt.kingMatrimonialBed" }],
    },
    {
        id: "tripleStandard",
        titleKey: "rates.tripleStandard",
        price: "$140 USD",
        icons: [
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed", colSpan: 2 },
        ],
    },
    {
        id: "tripleDeluxe",
        titleKey: "rates.tripleDeluxe",
        price: "$140 USD",
        icons: [
            { src: "/icons/rates/king-matrimonial-bed.webp", altKey: "rates.alt.kingMatrimonialBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
        ],
    },
    {
        id: "familySuite",
        titleKey: "rates.familySuite",
        price: "$150 USD",
        icons: [
            { src: "/icons/rates/king-matrimonial-bed.webp", altKey: "rates.alt.kingMatrimonialBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
        ],
        layout: "family"
    },
];
