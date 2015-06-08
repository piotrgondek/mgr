(function (App) {
    'use strict';

    App.module('header', function (header, App, Backbone) {

        header.on('start', function () {
            var headerView = new Backbone.Components.header.HeaderView();
            App.rootView.header.show(headerView);

            var trolleyModel = new Backbone.Components.header.TrolleyModel();
            trolleyModel.fetch();

            headerView.trolley.show(new Backbone.Components.header.TrolleyView({
                model: trolleyModel
            }));

            var basketChannel = Backbone.Wreqr.radio.channel('basket');
            basketChannel.commands.setHandler('addToBasket', trolleyModel.addToBasket.bind(trolleyModel));
        });
    });
})(App);
