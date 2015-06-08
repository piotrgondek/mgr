(function (Backbone, window) {
    'use strict';

    window.App = new Backbone.Marionette.Application();
    window.App.rootView = new Backbone.RootView();

    new Backbone.Routers.ProductRouter();

    Backbone.$(function () {
        window.App.rootView.render();

        window.App.start();

        Backbone.history.start({
            root: '~piotrgondek/mgr/app2'
        });

        console.log('App started');
    });
})(Backbone, window);
