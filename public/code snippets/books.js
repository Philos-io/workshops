(function(){
	'use strict';

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
			author: 'Kyle Thompson',
			title: 'This & Object prototype',
			description: "The 'this' keyword and prototypes for mastering JS",
			price: 9.99,
			category: 'Programming language',
			cover: 'images/objectandprototype.jpg'
		},
		{
			bookID: 09546,
			author: 'Backstop Media, Rick Waldron',
			title: 'Make: JavaScript Robotics',
			description: 'Building NodeBots with Raspberry Pi, Arduino, and BeagleBone',
			price: 9.99,
			category: 'Robotic & Programming,
			cover: 'images/robot.jpg'
		}
	];

	function getBooks(){
		return books;
	}
})();