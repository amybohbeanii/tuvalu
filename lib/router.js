/*
 * Define the front end routes. Iron router automatically detects based on the
 * name of the template
 */

// Define the layout template to be the template named layout
Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/about');
Router.route('/team');
Router.route('/art');
Router.route('/goals');
Router.route('/supportUs');
