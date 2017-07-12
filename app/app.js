var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl : '/login/login.view.html',
            controller  : 'LoginController',
            controllerAs: 'vm'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('signup', {
            // we'll get to this in a bit
        });

});


