(function(Backbone){
    'use strict';

    Backbone.Components.review.ReviewItemView = Backbone.Marionette.ItemView.extend({

        tagName: 'li',

        template: '#reviewItemTmpl'
    });
})(Backbone);