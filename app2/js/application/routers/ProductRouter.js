(function (Backbone, window) {
    'use strict';

    Backbone.Routers.ProductRouter = Backbone.Marionette.AppRouter.extend({

        routes: {
            'product(/:picture)': 'initProductPage'
        },

        initProductPage: function (picture) {
            var rootView = window.App.rootView;
            var modelData = {};

            if (picture) {
                modelData.defaultPicture = picture;
            }

            rootView.content.show(new Backbone.Components.product.ProductView({
                model: new Backbone.Components.product.ProductModel(modelData)
            }));
        }
    });
})(Backbone, window);