/*
 * Define the front end routes. Iron router automatically detects based on the
 * name of the template
 */
Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});

Router.route('/about');
