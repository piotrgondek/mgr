(function (Backbone) {
    'use strict';

    Backbone.Components.product.AlsoBoughtItem = Backbone.Marionette.ItemView.extend({

        tagName: 'li',

        template: _.template('<span><%= a %></span>')
    });
})(Backbone);
