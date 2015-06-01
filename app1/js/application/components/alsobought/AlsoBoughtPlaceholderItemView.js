(function (Backbone) {
    'use strict';

    Backbone.Components.alsobought.AlsoBoughtPlaceholderItemView = Backbone.Marionette.ItemView.extend({

        tagName: 'li',

        className: 'also-bought-item empty',

        template: '#alsoBoughtPlaceholderItemTmpl'
    });
})(Backbone);
