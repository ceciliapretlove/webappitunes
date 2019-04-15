jQuery(function() {
    'use strict';

    var browserWindow = jQuery(window);

    // Preloader
    browserWindow.on('load', function () {
        jQuery('.preloader').fadeOut('slow', function () {
            jQuery(this).remove();
        });
    });
        // :: 2.0 Nav Active Code
    if (jQuery.fn.classyNav) {
        jQuery('#nav').classyNav();
    }
        // :: 8.0 Sticky Active Code
    if (jQuery.fn.sticky) {
        jQuery(".main-menu").sticky({
            topSpacing: 0
        });
    }
        // :: 13.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }
})