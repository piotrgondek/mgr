(function(Backbone){
    'use strict';

    Backbone.Components.review.ReviewsCollection = Backbone.Collection.extend({

        url: 'data/review/reviews.json'
    });
})(Backbone);