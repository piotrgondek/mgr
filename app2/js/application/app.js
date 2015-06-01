(function (Backbone, window) {
    'use strict';

    window.App = new Backbone.Marionette.Application();
    window.App.rootView = new Backbone.RootView();

    new Backbone.Routers.ProductRouter();

    Backbone.$(function () {
        window.App.start();

        Backbone.history.start({
            pushState: true,
            root: '~piotrgondek/mgr/app2'
        });

        console.log('App started');
    });
})(Backbone, window);
