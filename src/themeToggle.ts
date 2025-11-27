// Set up a reload timer because it can take a few seconds for the editor to load, and we don't want the script to run infinitely if there's a problem.
let themeButtonReloads = 0;

export const darkLightToggle = () => {
    // Find the theme button wrapper and unbind existing events
    let defaultBtnWrapper = document.querySelector('[title="Switch theme"]');

    // If we didn't find the button, wait and try again
    if(defaultBtnWrapper) {
        // Get the button's parent to replace, because that's what Reedsy binds the event to
        defaultBtnWrapper = defaultBtnWrapper.parentNode as Element | null;

        // If we still don't have it, something went wrong, so exit
        if(!defaultBtnWrapper) {
            console.error('[Reedsy Editor Customizations] Failed to find theme button parent. Try reloading the editor.');
            return;
        }

        // Grab our document root
        const html = document.documentElement;
        const newBtnWrapper = defaultBtnWrapper.cloneNode(true);

        // Create our own click handler for our new element that will replace the default behavior
        newBtnWrapper.addEventListener('click', function () {
            html.classList.toggle('light-theme');
            html.classList.toggle('dark-theme');

            // Save preference for future page loads
            html.classList.contains('dark-theme') ? GM_setValue('preferredTheme', 'dark') : GM_setValue('preferredTheme', 'light');
        });

        // Replace the old button with the new one
        defaultBtnWrapper.replaceWith(newBtnWrapper);
    } else {
        // Increment counter
        themeButtonReloads++;

        // Stop trying after 10 attempts with appropriate error message
        if(themeButtonReloads > 10) {
            console.error('[Reedsy Editor Customizations] Failed to find theme button after multiple attempts. Giving up.');
            return;
        } else {
            console.log('[Reedsy Editor Customizations] Editor not ready, retrying in 5 seconds. (Attempt ' + themeButtonReloads + ' of 10)');
            setTimeout(darkLightToggle, 5000);
        }
    }
};

export const enforceThemePreference = () => {
    const preferredTheme = GM_getValue('preferredTheme');
    console.log(`[Reedsy Editor Customizations] Enforcing preferred theme: ${preferredTheme}`);
    /* OLD VERSION FOR REF ONLY
    // Grab our document root
    const html = document.documentElement;

    // Check if the "light-theme" class exists, and if so, remove and replace it
    if (html.classList.contains('light-theme')) {
        html.classList.remove('light-theme');
        html.classList.add('dark-theme');
        console.log('Reedsy Theme Setter: Switched to Dark Theme.');
    }

    // Safety check: Ensure dark-theme is present if light isn't there but no theme is set
    if (!html.classList.contains('light-theme') && !html.classList.contains('dark-theme')) html.classList.add('dark-theme');
    */
};