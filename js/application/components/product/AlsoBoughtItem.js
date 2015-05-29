(function (Backbone) {
    'use strict';

    Backbone.Components.product.AlsoBoughtItem = Backbone.Marionette.ItemView.extend({

        tagName: 'li',

        className: 'also-bought-item',

        template: '#alsoBoughtItemTmpl'
    });
})(Backbone);
