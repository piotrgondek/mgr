(function (Backbone, templates) {
    'use strict';

    Backbone.RootView = Backbone.Marionette.LayoutView.extend({

        el: '.main-container',

        template: templates['rootView'],

        regions: {
            content: '.content-container',
            header: '.header-container'
        },

        onRender: function () {
            this.header.show(new Backbone.Components.header.HeaderView());
        }
    });
})(Backbone, templates);
