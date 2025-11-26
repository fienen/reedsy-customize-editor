export const enforceDarkTheme = () => {
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
};