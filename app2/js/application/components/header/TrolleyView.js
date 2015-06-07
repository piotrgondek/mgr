(function (Backbone, templates) {
    'use strict';

    Backbone.Components.header.TrolleyView = Backbone.Marionette.ItemView.extend({

        className: 'trolley',

        template: templates['header/trolley'],

        modelEvents: {
            change: 'render'
        }
    });
})(Backbone, templates);
