angular.module('Geoponics', ['ngRoute', 'RouteControllers']);
 
angular.module('Geoponics').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html'
        // , controller: 'HomeController'
    })
    .when('/gallery', {
        templateUrl: 'templates/gallery.html', 
        controller: 'GalleryController'
    });
});