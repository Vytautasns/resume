import Vue from 'vue';
import UIkit from 'uikit';
import SimpleBar from 'simplebar';

window.Vue = Vue;
window.UIkit = UIkit;
window.SimpleBar = SimpleBar;

require('uikit/dist/js/uikit-icons.min.js');


try {
    window.$ = window.jQuery = require('jquery');

    // require('bootstrap-sass');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
