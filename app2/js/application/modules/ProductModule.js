(function (App) {
    'use strict';

    App.module('product', function (product, App, Backbone) {
        product.startWithParent = false;

        product.on('start', function (options) {
            var productView = new Backbone.Components.product.ProductView({
                model: new Backbone.Components.product.ProductModel(options)
            });
            App.rootView.content.show(productView);

            var alsoBoughtItemsCollection = new Backbone.Components.alsobought.AlsoBoughtItemsCollection();

            productView.alsoBought.show(new Backbone.Components.alsobought.AlsoBoughtItemsView({
                collection: alsoBoughtItemsCollection
            }));

            setTimeout(function longFetch() {
                alsoBoughtItemsCollection.fetch();
            }, 4000);

            productView.reviews.show(new Backbone.Components.review.ReviewView());
        });
    });
})(window.App);
