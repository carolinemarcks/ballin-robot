(function(){
    require.config({
        paths:  {
            "jquery"    :   "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min",
            "bootstrap" :   "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min",
            "underscore":   "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
            "backbone"  :   "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min",
            "text"      :   "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text"
        },
        shim:   {
            "bootstrap" :   ["jquery"],
            "underscore":   {
                exports : '_'
            },
            "backbone"  :   {
                deps    : ["underscore","jquery"],
                exports : "Backbone"
            },
        }

    });
}());
