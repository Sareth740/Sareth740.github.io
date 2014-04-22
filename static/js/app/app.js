var hugryApp = angular.module('hugryApp', []);

hugryApp.value('navgridTemplate', 'static/js/app/navgrid/navgrid.html');

hugryApp.controller('hugryController', function($scope, $timeout){

    $timeout(function(){
        $scope.finishedLoading = true;
    }, 1000).then(function(){
        $timeout(function(){
            $scope.finishedEnteringScriptBlock = true;
        }, 700);
    }).then(function(){
        $timeout(function(){
            $scope.finishedAnimatingScriptBlock = true;
        }, 1700);
    }).then(function(){
        $timeout(function(){
            $scope.finishedEnteringGrid = true;
        }, 2700);
    }).then(function(){
        $timeout(function(){
            $scope.finishedAnimatingGrid = true;
        }, 3500);
    });

});
