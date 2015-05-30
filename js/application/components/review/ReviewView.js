(function (Bakcbone) {
    'use strict';

    Backbone.Components.review.ReviewView = Bakcbone.Marionette.LayoutView.extend({

        el: '.reviews-block',

        template: false,

        regions: {},

        behaviors: {
            ReviewFormBehavior: {
                behaviorClass: Bakcbone.Components.review.ReviewFormBehavior
            }
        }
    });
})(Backbone);
