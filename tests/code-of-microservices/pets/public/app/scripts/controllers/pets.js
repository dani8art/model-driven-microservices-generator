'use strict';

/**
 * @ngdoc function
 * @name petsApp.controller:PetsCtrl
 * @description
 * # PetsCtrl
 * Controller of the petsApp
 */
angular.module('petsApp')
    .controller('PetsCtrl', function($scope, $http, Pets, DTOptionsBuilder) {

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withPaginationType('full_numbers')
            .withBootstrap();

        $scope.pet = {
            name: 'FuffyBot',
            tags: ['Bot', 'Danger']
        };

        $scope.pets = [];

        function reload() {
            $http.get('/api/pets').then((response) => {
                $scope.pets = response.data;
            });
        };

        $scope.add = function() {
            $http.post('/api/pets', $scope.pet).then((response) => {
                reload();
                $('#createModal').modal('hide');
            });
        };

        $scope.delete = function(pet) {
            $http.delete('/api/pets/' + pet._id).then((response) => {
                reload();
            });
        };

        $scope.update = function() {
            $http.put('/api/pets/' + $scope.pet._id, $scope.pet).then((response) => {
                reload();
                $('#createModal').modal('hide');
            });
        };

        $scope.openModal = function(pet) {
            if (pet) {
                $scope.pet = pet;
                $('#update').removeClass('hidden');
                $('#add').addClass('hidden');
            } else {
                $('#update').addClass('hidden');
                $('#add').removeClass('hidden');
                $scope.pet = {
                    name: 'FuffyBot',
                    tags: ['Bot', 'Danger']
                };
            }
            $('#createModal').modal('show');
        };
        reload();
    });
