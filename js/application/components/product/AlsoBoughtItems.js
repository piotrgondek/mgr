(function (Backbone) {
    'use strict';

    Backbone.Components.product.AlsoBoughtItems = Backbone.Marionette.CollectionView.extend({

        tagName: 'ul',

        className: 'also-bought-items',

        childView: Backbone.Components.product.AlsoBoughtItem
    });
})(Backbone);
