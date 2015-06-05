(function (Backbone) {
    'use strict';

    Backbone.Components.header.TrolleyBehavior = Backbone.Marionette.Behavior.extend({

        ui: {
            amount: '.amount',
            quantity: '.quantity'
        },

        basketEvents: {
            change: 'updateTrolley'
        },

        onShow: function () {
            this.basket = Backbone.Components.Basket.getInstance();
            this.bindEntityEvents(this.basket, this.basketEvents);
        },

        updateTrolley: function () {
            this.ui.amount.text('$' + this.basket.get('amount'));
            this.ui.quantity.text(this.basket.get('quantity') + ' items');
        }
    });
})(Backbone);
