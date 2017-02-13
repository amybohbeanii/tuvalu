/*
 * Define the front end routes. Iron router automatically detects based on the
 * name of the template
 */

Router.route('/', function () {
  this.render('home');
});

Router.route('/about', function() {
	this.render('about');
});
