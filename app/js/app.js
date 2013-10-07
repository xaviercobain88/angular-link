'use strict';



angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngTable']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/tabla.html', controller: TablaController});
    $routeProvider.when('/formulario/nuevo', {templateUrl: 'partials/formulario.html', controller: NuevoDepositoController});
    $routeProvider.when('/formulario/:depositoId', {templateUrl:'partials/formulario.html', controller: EditarDepositoController});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);