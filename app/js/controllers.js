'use strict';

/* Controllers */


function VentasResumenController($scope, $filter, ngTableParams, VentasResumen) {
    $scope.ventaDiarias = VentasResumen.query(function() {
        var data = $scope.ventaDiarias;
        $scope.tableParams = new ngTableParams({
            page: 1, // show first page
            total: data.length, // length of data
            count: 10, // count per page
            sorting: {
                name: 'vtVentasResumen_fecha'     // initial sorting
            }
        });
        $scope.$watch('tableParams', function(params) {
            var orderedData = params.sorting ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;
            $scope.ventaDiariasPaginadas = orderedData.slice(
                    (params.page - 1) * params.count,
                    params.page * params.count
                    );
        }, true);
    });
}

function TablaController($scope, $filter, ngTableParams, Deposito) {
    $scope.depositos = Deposito.query(function() {
        var data = $scope.depositos;
        $scope.tableParams = new ngTableParams({
            page: 1, // show first page
            total: data.length, // length of data
            count: 10, // count per page
            sorting: {
                name: 'vtDepositoSOAT_fechaIngreso'     // initial sorting
            }
        });
        $scope.$watch('tableParams', function(params) {
            var orderedData = params.sorting ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;
            $scope.depositosPaginados = orderedData.slice(
                    (params.page - 1) * params.count,
                    params.page * params.count
                    );
        }, true);
    });
}

function EditarDepositoController($scope, $routeParams, $location, Deposito, VentasResumen) {
    $scope.id = $routeParams.depositoId;
    $scope.deposito = Deposito.get({depositoId: $scope.id});

    $scope.save = function() {
        Deposito.save({depositoId: $scope.id}, $scope.deposito);
        $location.path('/');
    };

    $scope.delete = function() {
        Deposito.delete({depositoId: $scope.id});
        $location.path('/');
    };
 }

function NuevoDepositoController($scope, $routeParams, $location, Deposito, VentasResumen) {
    $scope.id = $routeParams.depositoId;
    console.log($scope.id);
    $scope.deposito = new Deposito();
    
    $scope.save = function() {
        Deposito.save({depositoId: 0}, $scope.deposito);
        $location.path('/');
    };
 }

//function ContactViewCtrl($scope, $http) {
//
//    $scope.lastForm = {};
//
//    $scope.sendForm = function(form) {
//        $scope.lastForm = angular.copy(form);
//        $http({
//            method: 'POST',
//            url: "/backend/email.php",
//            data: {
//                'contactname':$scope.form.name,
//                'weburl':$scope.form.website,
//                'email':$scope.form.email,
//                'app':$scope.form.project,
//                'subject':$scope.form.subject,
//                'message':$scope.form.message
//            },
//            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//        }).success(function(data, status, headers, config) {
//                $scope.resultData = data;
//                alert("Message sent successfully. We'll get in touch with you soon.");
//
//            }).error(function(data, status, headers, config) {
//                $scope.resultData = data;
//                alert("Sending message failed.");
//            });
//    }
//
//    $scope.resetForm = function() {
//        $scope.form = angular.copy($scope.lastForm);
//    }
//
//}
//
//ContactViewCtrl.$inject = ['$scope', '$http'];
//
//
//
