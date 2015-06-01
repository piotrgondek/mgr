(function (Backbone) {
    'use strict';

    Backbone.Components.alsobought.AlsoBoughtItemView = Backbone.Marionette.ItemView.extend({

        tagName: 'li',

        className: 'also-bought-item',

        template: '#alsoBoughtItemTmpl'
    });
})(Backbone);
