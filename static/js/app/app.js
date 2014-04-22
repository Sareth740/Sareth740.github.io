var hugryApp = angular.module('hugryApp', []);

hugryApp.value('navgridTemplate', 'static/js/app/navgrid/navgrid.html');

hugryApp.controller('hugryController', function($scope, $timeout){
    $timeout(function(){
        $scope.finishedLoading = true;
    }, 200);

    $timeout(function(){
        $scope.finishedFadeIn = true;
        $timeout(function(){
            $scope.finishedAnimatingScriptBlock = true;
            $timeout(function(){
                $scope.finishedAnimatingGrid = true;
            }, 500);
        }, 1000);
    }, 1000);
});
