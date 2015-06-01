(function (Backbone) {
    'use strict';

    Backbone.Components.gallery.GalleryBehavior = Backbone.Marionette.Behavior.extend({

        ui: {
            thumbnails: '.img-thumbnail > a',
            fullImage: '.full-img'
        },

        events: {
            'mouseover @ui.thumbnails': 'changeFullImage',
            'click @ui.thumbnails': 'changeFullImage'
        },

        /**
         * @param {jQuery.Event} e
         */
        changeFullImage: function (e) {
            e.preventDefault();
            this.ui.fullImage.attr('src', Backbone.$(e.target).attr('src'));
        }
    });
})(Backbone);
