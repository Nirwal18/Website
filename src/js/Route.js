var app = angular.module('WebX', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/',{

		templateUrl:'TempView/home.html'
	})
	.when('/catagory',{
		templateUrl:'TempView/catagory.html'
	})
	.when('/downloads',{
		templateUrl:'TempView/downloads.html'
	})
	.when('/about',{
		templateUrl:'TempView/about.html'
	})
	.when('/contactus',{
		templateUrl:'TempView/contactus.html'
	})
	.when('/learning',{
		templateUrl:'TempView/learning.html'
	})
	.when('/software',{
		templateUrl:'TempView/about.html'
	})
	.otherwise({redirectTo:'/'})
});

