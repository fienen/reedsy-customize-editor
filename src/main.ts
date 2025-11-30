import { initEditorCustomizations } from './utils';

(function() {
    'use strict';

    // Wait before trying to initialize to give the editor time to load
    setTimeout(initEditorCustomizations, 5000);
})();
