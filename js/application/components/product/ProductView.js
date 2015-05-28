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
            var c = new Backbone.Collection([
                {a: 1}, {a: 2}, {a: 3}
            ]);

            this.alsoBought.show(new Backbone.Components.product.AlsoBoughtItems({
                collection: c
            }));
        }
    });
})(Backbone);
