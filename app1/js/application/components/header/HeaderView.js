(function (Backbone) {
    'use strict';

    Backbone.Components.header.HeaderView = Backbone.Marionette.LayoutView.extend({

        el: '.header',

        template: false,

        behaviors: {
            TrolleyBehavior: {
                behaviorClass: Backbone.Components.header.TrolleyBehavior
            }
        }
    });
})(Backbone);
