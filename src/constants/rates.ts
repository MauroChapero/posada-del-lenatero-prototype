import type { Rate } from "@types";

export const ratesList: Rate[] = [
    // --- Fila 1 ---
    {
        id: "singleStandard",
        titleKey: "rates.singleStandard",
        price: "$95 USD",
        icons: [{ src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" }],
    },
    {
        id: "singleEspecialKing",
        titleKey: "rates.singleEspecialKing",
        price: "$105 USD",
        icons: [{ src: "/icons/rates/single-king-bed.webp", altKey: "rates.alt.kingSingleBed" }],
    },
    {
        id: "dobleKingStandard",
        titleKey: "rates.dobleKingStandard",
        price: "$110 USD",
        icons: [{ src: "/icons/rates/single-king-bed.webp", altKey: "rates.alt.kingSingleBed" }],
    },

    // --- Fila 2 ---
    {
        id: "dobleMatrimonialKing",
        titleKey: "rates.dobleMatrimonialKing",
        price: "$125 USD",
        isPopular: true,
        icons: [{ src: "/icons/rates/king-matrimonial-bed.webp", altKey: "rates.alt.kingMatrimonialBed" }],
    },

    // --- Fila 3 ---
    {
        id: "tripleStandard",
        titleKey: "rates.tripleStandard",
        price: "$140 USD",
        icons: [
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
        ],
    },
    {
        id: "tripleEspecial",
        titleKey: "rates.tripleEspecial",
        price: "$140 USD",
        icons: [
            { src: "/icons/rates/king-matrimonial-bed.webp", altKey: "rates.alt.kingMatrimonialBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
        ],
    },
    {
        id: "suiteFamiliar",
        titleKey: "rates.suiteFamiliar",
        price: "$150 USD",
        icons: [
            { src: "/icons/rates/king-matrimonial-bed.webp", altKey: "rates.alt.kingMatrimonialBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
            { src: "/icons/rates/single-bed.webp", altKey: "rates.alt.singleBed" },
        ],
        layout: "family"
    },
];
