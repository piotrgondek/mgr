(function (Backbone, templates) {
    'use strict';

    Backbone.Components.alsobought.AlsoBoughtPlaceholderItemView = Backbone.Marionette.ItemView.extend({

        tagName: 'li',

        className: 'also-bought-item empty',

        template: templates['product/alsobought/placeholder']
    });
})(Backbone, templates);
