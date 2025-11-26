(function() {
    'use strict';

    console.log('TEST4');
    
    const enforceDarkTheme = () => {
        const html = document.documentElement;

        // Check if the "light-theme" class exists
        if (html.classList.contains('light-theme')) {
            html.classList.remove('light-theme');
            html.classList.add('dark-theme');
            console.log('Reedsy Theme Setter: Switched to Dark Theme.');
        }

        // Safety check: Ensure dark-theme is present if light isn't there but no theme is set
        if (!html.classList.contains('dark-theme')) html.classList.add('dark-theme');
    };

    const removeUpsellPanels = () => {
        // Get elements that have ads
        let statsContainer = document.querySelector('rbe-extra-stats');
        let premiumAdBanner = document.querySelector('rbe-premium-ad-banner-wrapper');

        if (premiumAdBanner && statsContainer && statsContainer.children.length > 1) {
            let panelsToRemove = statsContainer.querySelectorAll('.extra-stats-panel');

            // Remove the first two panels found in the stat panel
            if (panelsToRemove.length > 1) {
                panelsToRemove[1].remove(); // Most used words
                panelsToRemove[0].remove(); // Most used phrases
            }

            // Remove the premium ad banner in the left sidebar
            premiumAdBanner.remove();
        } else {
            // Page may not be loaded yet, wait five seconds
            setTimeout(removeUpsellPanels, 5000);
        }
    };


    // Set up an observer to watch for changes to the <html> class list
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // This prevents Reedsy from overwriting your change when you navigate chapters
            if (mutation.attributeName === "class") enforceDarkTheme();
        });
    });

    // Run immediately on load
    enforceDarkTheme();

    // Wait before trying to remove panels, because the app can take a moment to fully load
    setTimeout(removeUpsellPanels, 5000);

    // Start observing the <html> element
    observer.observe(document.documentElement, { attributes: true });
})();
