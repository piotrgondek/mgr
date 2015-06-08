(function (Backbone, templates) {
    'use strict';

    Backbone.Components.product.ProductView = Backbone.Marionette.LayoutView.extend({

        className: 'product',

        template: templates['product'],

        behaviors: {
            GalleryBehavior: {
                behaviorClass: Backbone.Components.gallery.GalleryBehavior
            }
        },

        regions: {
            alsoBought: '.also-bought-region',
            reviews: '.reviews-region'
        },

        ui: {
            addBtn: '.action-buttons .add-button'
        },

        events: {
            'click @ui.addBtn': 'addProduct'
        },

        addProduct: function () {
            this.model.addProduct();
        }
    });
})(Backbone, templates);
