describe('Suite',function(){
describe('Testing Controller', function(){
    it('should do something', function(){
        module('myModule');
        var scope=[];
        var ctrl;
        inject(function($controller){
ctrl=$controller('myController', {$scope:scope});
        });

        expect(scope.searchText).toBeDefined();
    });
});
});