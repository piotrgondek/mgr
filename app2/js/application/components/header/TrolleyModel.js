(function (Backbone) {
    'use strict';

    Backbone.Components.header.TrolleyModel = Backbone.Model.extend({

        url: 'data/basket.php',

        defaults: {
            amount: 0,
            quantity: 0
        },

        addToBasket: function (item) {
            this.set({
                amount: this.get('amount') + item.price,
                quantity: this.get('quantity') + 1
            });
            this.save();
        }
    });
})(Backbone);
