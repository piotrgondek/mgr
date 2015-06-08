(function (Backbone, templates) {
    'use strict';

    Backbone.Components.header.HeaderView = Backbone.Marionette.LayoutView.extend({

        className: 'header',

        template: templates['header'],

        regions: {
            trolley: '.trolley-container'
        }
    });
})(Backbone, templates);
