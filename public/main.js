(function(){
	
	var books = [
		{
			bookID: 09809,
			author: 'Davy Mitchel',
			title: 'Functional JavaScript',
			description: 'Functional programming in JavaScript',
			price: 29.99,
			category: 'Programming language',
			cover: 'images/javascript.jpg'
		},
		{
			bookID: 09100,
			author: 'Max Mitchel',
			title: 'AngularJS: Up and Running',
			description: 'Enhanced Productivity with Structured Web Apps',
			price: 19.99,
			category: 'Web Frameworks',
			cover: 'images/angularjs.jpg'
		},
		{
			bookID: 09099,
			author: 'Mehdi Mitchel',
			title: 'JavaScript Patterns',
			description: 'Build Better Applications with Coding and Design Patterns',
			price: 31.99,
			category: 'Programming language',
			cover: 'images/designpattern.jpg'
		},
		{
			bookID: 09353,
			author: 'Jesse Cravens, Thomas Q Brady',
			title: 'Building Web Apps with Ember.js',
			description: "Build ambitious JavaScript App",
			price: 9.99,
			category: 'Web Frameworks',
			cover: 'images/emberjs.jpg'
		},
		{
			bookID: 09546,
			author: 'Backstop Media, Rick Waldron',
			title: 'Make: JavaScript Robotics',
			description: 'Building NodeBots with Raspberry Pi, Arduino, and BeagleBone',
			price: 9.99,
			category: 'Robotic & Programming',
			cover: 'images/robot.jpg'
		}
	];


	function BookController($scop){
		$scop.books = books;
	}

	// Create Module bookstore
	angular.module('bookstore', [])
	.controller('BookControler', BookController)
	.config(function($routeProvider){
		
		$routeProvider
			.when('/', {
				templateUrl: 'templates/book.html',
				controller: 'BookController'
			})
			.when('/addBook', {
				templateUrl: 'templates/addBook.html',
				controller: 'BookController'	
			})
			.otherwise('/');
	});
})();