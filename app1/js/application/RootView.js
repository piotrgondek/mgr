(function (Backbone) {
    'use strict';

    Backbone.RootView = Backbone.Marionette.LayoutView.extend({

        el: 'body',

        regions: {
            header: '.header-container'
        }
    });
})(Backbone);
