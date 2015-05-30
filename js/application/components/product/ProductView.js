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
            var alsoBoughtItemsCollection = new Backbone.Components.product.AlsoBoughtItemsCollection();

            this.alsoBought.show(new Backbone.Components.product.AlsoBoughtItemsView({
                collection: alsoBoughtItemsCollection
            }));

            alsoBoughtItemsCollection.fetch();
        }
    });
})(Backbone);
