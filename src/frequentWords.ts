/* TODO:
    1: Write a debouncer for the text analyzer to reduce load on keyup
    2: Write a keyup listener to run the counter after debounce
    3: Figure out how to render the CSS
*/

/**
 * Extracts text from an HTML element and returns the top 10 most frequent words
 * with their occurrence counts.
 * @param {HTMLElement} element - The DOM element to analyze.
 * @returns {Array<{word: string, count: number}>} - Array of objects sorted by count.
 */
export const getTopTenWordsWithCounts = () => {
    const editorWrapper = document.getElementById('chapter-editor');
    const stopWordList = new Set(['the', 'and', 'a', 'an', 'in', 'on', 'of', 'to', 'is', 'it']);

    // 1. Validation
    if (!editorWrapper) return [];

    // 2. Extraction & Normalization
    const text = editorWrapper.textContent || editorWrapper.innerText;
    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "") // Remove punctuation
        .split(/\s+/)            // Split by whitespace
        .filter(word => word.length > 0 && !stopWordList.has(word));

    // 3. Counting
    const frequencyMap: Record<string, number> = {};
    words.forEach(word => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });

    // 4. Formatting & Sorting
    // Convert the map into an array of objects: { word: "example", count: 5 }
    const result = Object.keys(frequencyMap)
        .map(word => ({ word: word, count: frequencyMap[word] }))
        .sort((a, b) => b.count - a.count); // Sort descending by count

    // 5. Slicing
    return result.slice(0, 10);
}

export function renderWordFrequencyChart() {
    const wrapper = document.getElementById('rce-most-used-words');
    if (!wrapper) return;
    wrapper.innerText = 'Rendering chart...';
    console.log('[Reedsy Editor Customizations] renderWordFrequencyChart() fired.');
    /*
    const data = getTopTenWordsWithCounts(sourceEl);

    if (!targetElement) return;
    targetElement.innerHTML = '';
    targetElement.classList.add('frequency-chart-container');

    if (!data || data.length === 0) {
        targetElement.innerHTML = '<p>No data found.</p>';
        return;
    }

    const maxCount = data[0].count;

    data.forEach(item => {
        const percentage = maxCount > 0 ? (item.count / maxCount) * 100 : 0;

        // Using template literals for cleaner DOM generation (Alternative approach to createElement)
        const rowHTML = `
            <div class="chart-row">
                <span class="row-word" title="${item.word}">${item.word}</span>
                <div class="row-bar-container">
                        <div class="bar-fill" style="width: ${percentage}%; ${percentage === 100 ? 'background-color:#2980b9' : ''}"></div>
                </div>
                <span class="row-count">${item.count}</span>
            </div>
        `;
        targetElement.insertAdjacentHTML('beforeend', rowHTML);
    });
    */
}