(function (Backbone) {
    'use strict';

    Backbone.Components.review.ReviewsCollectionView = Backbone.Marionette.CollectionView.extend({

        tagName: 'ul',

        className: 'reviews',

        childView: Backbone.Components.review.ReviewItemView
    });
})(Backbone);
