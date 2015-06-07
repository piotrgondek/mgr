(function (Backbone) {
    'use strict';

    var undefined;
    var basketInstance;
    var Basket = Backbone.Model.extend({

        url: 'data/basket.php',

        defaults: {
            amount: 0,
            quantity: 0
        },

        addToBasket: function (data) {
            this.set({
                amount: data.amount,
                quantity: this.get('quantity') + 1
            });
            this.save();
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
