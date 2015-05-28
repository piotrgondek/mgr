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
            alsoBought: '.also-bought-wrapper'
        },

        onShow: function () {
            var c = new Backbone.Collection();

            this.alsoBought.show(new Backbone.Components.product.AlsoBoughtItems({
                collection: c
            }));

            c.fetch({
                url: 'data/alsoBought.json'
            });
        }
    });
})(Backbone);
