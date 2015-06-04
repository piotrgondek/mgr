(function (Backbone, window) {
    'use strict';

    Backbone.Routers.ProductRouter = Backbone.Marionette.AppRouter.extend({

        routes: {
            '(:picture)': 'initProductPage'
        },

        initProductPage: function (picture) {
            var productModel;
            var rootView = window.App.rootView;

            rootView.addRegions({
                product: '.content-container'
            });

            if (picture) {
                productModel = new Backbone.Components.product.ProductModel({
                    defaultPicture: picture
                });
            } else {
                productModel = new Backbone.Components.product.ProductModel();
            }

            rootView.product.show(new Backbone.Components.product.ProductView({
                model: productModel
            }));
        }
    });
})(Backbone, window);