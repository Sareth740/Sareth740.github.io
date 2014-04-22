var hugryApp = angular.module('hugryApp', []);

hugryApp.value('navgridTemplate', 'static/js/app/navgrid/navgrid.html');

hugryApp.controller('hugryController', function($scope, $timeout){
    $timeout(function(){
        $scope.finishedLoading = true;
    }, 1000);

    $timeout(function(){
        $scope.finishedFadeIn = true;
        $timeout(function(){
            $scope.finishedAnimatingScriptBlock = true;
            $timeout(function(){
                $scope.finishedEnteringBlockGrid = true;
                $timeout(function(){
                    $scope.finishedAnimatingGrid = true;
                }, 500);
            }, 800);
        }, 1000);
    }, 2000);
});
