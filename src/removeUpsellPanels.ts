export const removeUpsellPanels = () => {
    // Get elements that have ads
    let statsContainer = document.querySelector('rbe-extra-stats');
    let premiumAdBanner = document.querySelector('rbe-premium-ad-banner-wrapper');

    if (premiumAdBanner && statsContainer && statsContainer.children.length > 1) {
        let statPanelsToRemove = statsContainer.querySelectorAll('.extra-stats-panel');

        // Remove the first two accordion panels found in the stat panel
        if (statPanelsToRemove.length > 1) {
            statPanelsToRemove[1].remove(); // Most used phrases
            statPanelsToRemove[0].remove(); // Most used words
        }

        // Remove the premium ad banner in the bottom of the left sidebar
        premiumAdBanner.remove();
    } else {
        // Page may not be loaded yet, wait five seconds
        setTimeout(removeUpsellPanels, 5000);
    }
};