(function (Backbone) {
    'use strict';

    var undefined;
    var basketInstance;
    var Basket = Backbone.Model.extend({

        url: 'data/basket/basket.php',

        defaults: {
            amount: 0,
            quantity: 0
        },

        addToBasket: function (data) {
            Backbone.ajax(data)
                .done(function (data) {
                    this.set(this.parse(data));
                }.bind(this));
        }
    });

    Backbone.Components.Basket = {

        getInstance: function () {
            if (basketInstance === undefined) {
                basketInstance = new Basket();
                basketInstance.fetch();
            }

            return basketInstance;
        }
    };
})(Backbone);
