(function (Backbone) {
    'use strict';

    Backbone.Components.product.AlsoBoughtItems = Backbone.Marionette.CollectionView.extend({

        el: '#alsoBoughtItems',

        childView: Backbone.Components.product.AlsoBoughtItem
    });
})(Backbone);
