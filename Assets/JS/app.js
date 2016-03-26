var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'pages/home.html'
      // controller: 'homepageController'
    })
    // .when('/product', {
    //   templateUrl: 'productPage.html'
    // })
    .otherwise({
      redirectTo: '/home'
    });
});
