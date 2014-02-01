define(['jquery', 'underscore', 'backbone',
        'text!html/layout.html',
        'text!html/home.html',
        'bootstrap'],
function($, _, Backbone,
    layout, home){
    var Router = Backbone.Router.extend({
        DEFAULT_ROUTE: '',
        routes: {
            ''  : function(){
                $("#body-container").html(home);
            },
        },
        initialize  : function(){
            $("body").html(layout);
            Backbone.history.start({root: window.location.pathname});
        }
    });

    function Main(){
        this.router = new Router();
    };

    Main.prototype.run = function(){
        console.log("running...");
    };

    return new Main();
});
