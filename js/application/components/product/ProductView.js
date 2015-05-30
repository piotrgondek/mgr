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
            var c = new Backbone.Collection();

            this.alsoBought.show(new Backbone.Components.product.AlsoBoughtItemsView({
                collection: c
            }));

            c.fetch({
                url: 'data/alsoBought.json'
            });
        }
    });
})(Backbone);
