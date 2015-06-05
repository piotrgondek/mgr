(function (Backbone, window) {
    'use strict';

    Backbone.Routers.ProductRouter = Backbone.Marionette.AppRouter.extend({

        routes: {
            'product(/:picture)': 'initProductPage'
        },

        initProductPage: function (picture) {
            var productModel;
            var rootView = window.App.rootView;

            if (picture) {
                productModel = new Backbone.Components.product.ProductModel({
                    defaultPicture: picture
                });
            } else {
                productModel = new Backbone.Components.product.ProductModel();
            }

            rootView.content.show(new Backbone.Components.product.ProductView({
                model: productModel
            }));
        }
    });
})(Backbone, window);