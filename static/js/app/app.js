var hugryApp = angular.module('hugryApp', []);

hugryApp.value('navgridTemplate', 'static/js/app/navgrid/navgrid.html');

hugryApp.controller('hugryController', function($scope, $timeout){
    $timeout(function(){
        $scope.finishedLoading = true;
        $timeout(function(){
            $scope.finishedAnimatingScriptBlock = true;
        }, 1000);
    }, 1000);
});
