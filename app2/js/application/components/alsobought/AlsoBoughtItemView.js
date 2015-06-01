(function (Backbone, templates) {
    'use strict';

    Backbone.Components.alsobought.AlsoBoughtItemView = Backbone.Marionette.ItemView.extend({

        tagName: 'li',

        className: 'also-bought-item',

        template: templates['product/alsobought/item']
    });
})(Backbone, templates);
