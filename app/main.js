requirejs.config({
    paths: {
        'knockout': '../lib/knockout',
        'jquery': '../lib/jquery',
		'router': '../lib/sammy',
		'engine': 'viewengine'
    }
});

define(function (require) {
	var viewEngine = require('engine');
	var router = require('router');
	
	var app = router(function() {

        this.get('#/app/:name', function() {
			viewEngine.showViewByConvention('viewHost', this.params['name']);
        });
		
		// add more paths here as needed
    });
	  
	app.run('#/app/view1');  
});