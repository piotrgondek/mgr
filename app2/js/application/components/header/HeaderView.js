(function (Backbone, templates) {
    'use strict';

    Backbone.Components.header.HeaderView = Backbone.Marionette.LayoutView.extend({

        className: 'header',

        template: templates['header'],

        regions: {
            trolley: '.trolley-container'
        },

        onShow: function () {
            this.trolley.show(new Backbone.Components.header.TrolleyView({
                model: Backbone.Components.Basket.getInstance()
            }));
        }
    });
})(Backbone, templates);
