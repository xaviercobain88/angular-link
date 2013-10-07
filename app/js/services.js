'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', ['ngResource']);

services.factory('VentasResumen', ['$resource', function($resource) {
    return $resource('http://pruebascoactivas.espaciolink.com/webservices/index.php/DepositoSoat/ventasResumenAdeudado');

    }]);

services.factory('Deposito', ['$resource', function($resource) {
//    return $resource('http://pruebascoactivas.espaciolink.com/webservices/index.php/DepositoSoat/deposito?  &callback=');
        return $resource('http://pruebascoactivas.espaciolink.com/webservices/index.php/DepositoSoat/deposito/:depositoId',{ depositoId: '@deposito.vtDepositoSOAT_id' });
    }]);






