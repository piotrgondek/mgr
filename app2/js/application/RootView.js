(function (Backbone, templates) {
    'use strict';

    Backbone.RootView = Backbone.Marionette.LayoutView.extend({

        el: '.main-container',

        template: templates['rootView'],

        regions: {
            content: '.content-container'
        }
    });
})(Backbone, templates);
