(function (Backbone, window) {
    'use strict';

    Backbone.Routers.ProductRouter = Backbone.Marionette.AppRouter.extend({

        routes: {
            'product(/:picture)': 'initProductPage'
        },

        initProductPage: function (picture) {
            var modelData = {};

            if (picture) {
                modelData.defaultPicture = picture;
            }

            window.App.module('product').start(modelData);
        }
    });
})(Backbone, window);