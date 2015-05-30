(function (Backbone) {
    "use strict";

    Backbone.Components.product.AlsoBoughtItemsCollection = Backbone.Collection.extend({

        url: 'data/alsoBought.json'
    });
})(Backbone);
