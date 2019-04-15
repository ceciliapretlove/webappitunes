jQuery(function() {
    'use strict';

    var browserWindow = jQuery(window);

    // Preloader
    browserWindow.on('load', function () {
        jQuery('.preloader').fadeOut('slow', function () {
            jQuery(this).remove();
        });
    });
        // Nav Active Code
    if (jQuery.fn.classyNav) {
        jQuery('#nav').classyNav();
    }
        // Sticky Active Code
    if (jQuery.fn.sticky) {
        jQuery(".main-menu").sticky({
            topSpacing: 0
        });
    }
        // wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }
})