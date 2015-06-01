(function (Bakcbone) {
    'use strict';

    Backbone.Components.review.ReviewView = Bakcbone.Marionette.LayoutView.extend({

        el: '.reviews-block',

        template: false,

        regions: {
            reviews: '.reviews-wrapper'
        },

        behaviors: {
            ReviewFormBehavior: {
                behaviorClass: Bakcbone.Components.review.ReviewFormBehavior
            }
        },

        onShow: function () {
            var reviewsCollection = new Bakcbone.Components.review.ReviewsCollection();

            this.reviews.show(new Bakcbone.Components.review.ReviewsCollectionView({
                collection: reviewsCollection
            }));

            reviewsCollection.fetch();
        }
    });
})(Backbone);
