(function (Backbone) {
    'use strict';

    Backbone.Components.product.AlsoBoughtItemsView = Backbone.Marionette.CollectionView.extend({

        tagName: 'ul',

        className: 'also-bought-items',

        childView: Backbone.Components.product.AlsoBoughtItemView
    });
})(Backbone);
