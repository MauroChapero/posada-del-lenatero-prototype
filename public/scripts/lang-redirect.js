/**
 * Client-side language detection & redirect.
 * Runs on the Spanish root page (/). If the browser prefers English
 * and the user hasn't manually chosen a language, redirects to /en/.
 */
(function () {
    try {
        const hasManualChoice = localStorage.getItem("lang-choice");
        if (hasManualChoice) return;

        if (window.location.pathname === "/" || window.location.pathname === "") {
            const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || "";
            if (browserLang.startsWith("en")) {
                window.location.replace("/en/");
            }
        }
    } catch (_) {
        // localStorage might be blocked in some browsers — silently ignore
    }
})();
