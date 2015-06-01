(function (Backbone, templates) {
    'use strict';

    Backbone.RootView = Backbone.Marionette.LayoutView.extend({

        el: '.main-container',

        template: templates['rootView']
    });
})(Backbone, templates);
