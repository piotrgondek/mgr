(function (Backbone, window) {
    'use strict';

    Backbone.Routers.ProductRouter = Backbone.Marionette.AppRouter.extend({

        routes: {
            'product.php': 'initProductPage'
        },

        initProductPage: function () {
            var rootView = window.App.rootView;

            rootView.addRegions({
                product: '.content-container'
            });

            rootView.product.show(new Backbone.Components.product.ProductView());
        }
    });
})(Backbone, window);