(function (Backbone) {
    'use strict';

    Backbone.Components.product.ProductModel = Backbone.Model.extend({

        defaults: {
            defaultPicture: 'sigma01.jpg',
            price: 799
        },

        addProduct: function () {
            Backbone.Wreqr.radio.commands.execute('basket', 'addToBasket', {
                price: this.get('price')
            });
        }
    });
})(Backbone);
