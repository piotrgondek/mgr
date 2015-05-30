(function (Backbone) {
    'use strict';

    Backbone.Components.review.ReviewFormBehavior = Backbone.Marionette.Behavior.extend({

        ui: {
            content: '.review-content',
            select: '.review-like',
            form: '.review-form',
            successMsg: '.success',
            sendBtn: '.send-btn'
        },

        events: {
            'submit @ui.form': 'submitForm'
        },

        /**
         * @param {jQuery.Event} e
         */
        submitForm: function (e) {
            e.preventDefault();
            this.ui.successMsg.removeClass('visible');
            this.ui.sendBtn.hide();

            Backbone
                .ajax({
                    url: this.ui.form.attr('action'),
                    method: 'POST',
                    data: {
                        content: this.ui.content.val(),
                        select: this.ui.select.val()
                    }
                })
                .done(function () {
                    this.ui.successMsg.addClass('visible');
                }.bind(this));
        }
    });
})(Backbone);