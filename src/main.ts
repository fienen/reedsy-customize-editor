import { initEditorCustomizations } from './utils';
import styles from './src/styles.css?inline';

(function() {
    'use strict';

    addStyles(styles);

    // Wait before trying to initialize to give the editor time to load
    setTimeout(initEditorCustomizations, 5000);
})();
