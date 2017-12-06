

var app = angular.module("myModule", [])
.controller("myController", function($scope, $http){
    $scope.searchText="";
    $scope.teszt="aaa";
    $scope.bookDatas=[];
    $scope.basketData=[];
    $scope.basket=function(input){
        $scope.basketData.push(input);
    }
    $scope.search=function(){
        
    $http.get('https://www.googleapis.com/books/v1/volumes?q='+$scope.searchText).then(function(response){        
    $scope.bookDatas=response.data;
    });
}    
});
