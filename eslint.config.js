import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
    // JS base
    js.configs.recommended,

    // TypeScript
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_" },
            ],

            "semi": ["error", "never"],
        },
    },

    // TypeScript
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "semi": ["error", "never"],
        },
    },

    // Astro
    {
        files: ["**/*.astro"],
        rules: {
            "semi": ["error", "never"],
        },
    },


    // Astro
    ...astro.configs.recommended,
    {
        files: ["**/*.astro"],
        rules: {
            "astro/no-conflict-set-directives": "error",
            "astro/no-unused-css-selector": "warn",
        },
    },

    // Ignorados
    {
        ignores: [
            "dist/",
            ".astro/",
            "node_modules/",
        ],
    },
];