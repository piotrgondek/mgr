(function (Backbone) {
    'use strict';

    Backbone.Components.alsobought.AlsoBoughtItemsView = Backbone.Marionette.CollectionView.extend({

        tagName: 'ul',

        className: 'also-bought-items',

        childView: Backbone.Components.alsobought.AlsoBoughtItemView,

        emptyView: Backbone.Components.alsobought.AlsoBoughtPlaceholderItemView
    });
})(Backbone);
