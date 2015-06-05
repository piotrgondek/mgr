(function (Backbone) {
    'use strict';

    Backbone.Components.product.ProductActionsBehavior = Backbone.Marionette.Behavior.extend({

        ui: {
            form: '.product-actions'
        },

        events: {
            'submit @ui.form': 'addToBasket'
        },

        initialize: function () {
            this.basket = Backbone.Components.Basket.getInstance();
        },

        /**
         * @param {jQuery.Event} e
         */
        addToBasket: function (e) {
            e.preventDefault();
            this.basket.addToBasket({
                url: this.ui.form.attr('action'),
                data: this.ui.form.serialize()
            });
        }
    });
})(Backbone);
