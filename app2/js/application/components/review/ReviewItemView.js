(function(Backbone, templates){
    'use strict';

    Backbone.Components.review.ReviewItemView = Backbone.Marionette.ItemView.extend({

        tagName: 'li',

        template: templates['product/review/item']
    });
})(Backbone, templates);