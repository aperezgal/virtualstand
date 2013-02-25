'use strict';


// Declare app level module which depends on filters, and services
var virtualStandApp = angular.module('virtualStandApp', ['virtualStandApp.filters', 'virtualStandApp.services', 'virtualStandApp.directives']).
  config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
    	templateUrl: 'views/home.html',
    	controller: HomeCtrl
    });
    $routeProvider.when('/zone1', {
    	templateUrl: 'views/zone1.html',
    	controller: Zone1Ctrl
    });
    $routeProvider.when('/zone2', 
    	{templateUrl: 'views/zone2.html', 
    	controller: Zone2Ctrl
    });
    $routeProvider.when('/zone3', {
    	templateUrl: 'views/zone3.html', 
    	controller: Zone3Ctrl
    }); 
    $routeProvider.when('/agenda', {
    	templateUrl: 'views/agenda.html', 
    	controller: AgendaCtrl
    });
    $routeProvider.when('/press', {
    	templateUrl: 'views/press.html', 
    	controller: PressCtrl
    });
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);

 


 virtualStandApp.run(function($rootScope) {
	  /**
	 * Wrapper for angular.isArray, isObject, etc checks for use in the view
	 *
	 * @param type {string} the name of the check (casing sensitive)
	 * @param value {string} value to check
	 */
	$rootScope.is = function(type, value) {
		return angular['is'+type](value);
	};
	/**
	 * Wrapper for $.isEmptyObject()
	 *
	 * @param value	{mixed} Value to be tested
	 * @return boolean
	 */
	$rootScope.empty = function(value) {
		return $.isEmptyObject(value);
	};

  	/**
	 * Debugging Tools
	 *
	 * Allows you to execute debug functions from the view
	 */
	$rootScope.log = function(variable) {
		console.log(variable);
	};

	$rootScope.alert = function(text) {
		alert(text);
	};

});

