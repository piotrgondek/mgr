(function (Backbone) {
    'use strict';

    Backbone.Components.product.ProductView = Backbone.Marionette.LayoutView.extend({

        el: '.content',

        template: false,

        behaviors: {
            GalleryBehavior: {
                behaviorClass: Backbone.Components.gallery.GalleryBehavior
            }
        },

        regions: {
            alsoBought: '.also-bought-region',
            reviews: '.reviews-region'
        },

        onShow: function () {
            var alsoBoughtItemsCollection = new Backbone.Components.alsobought.AlsoBoughtItemsCollection();

            this.alsoBought.show(new Backbone.Components.alsobought.AlsoBoughtItemsView({
                collection: alsoBoughtItemsCollection
            }));

            setTimeout(function longFetch() {
                alsoBoughtItemsCollection.fetch();
            }, 4000);

            this.reviews.show(new Backbone.Components.review.ReviewView());
        }
    });
})(Backbone);
