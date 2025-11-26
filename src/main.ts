import { darkLightToggle, enforceThemePreference } from './themeToggle';
import { removeUpsellPanels } from './removeUpsellPanels';

(function() {
    'use strict';

    // Set up an observer to watch for changes to the <html> class list
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // This prevents Reedsy from overwriting your change when you navigate chapters
            if (mutation.attributeName === "class") enforceThemePreference();
        });
    });

    // Run immediately on load
    darkLightToggle();

    // Wait before trying to remove panels, because the app can take a moment to fully load
    setTimeout(removeUpsellPanels, 5000);

    // Start observing the <html> element
    observer.observe(document.documentElement, { attributes: true });
})();
