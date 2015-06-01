(function (Backbone) {
    "use strict";

    Backbone.Components.alsobought.AlsoBoughtItemsCollection = Backbone.Collection.extend({

        url: 'data/alsoBought.json'
    });
})(Backbone);
