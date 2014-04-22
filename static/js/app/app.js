var hugryApp = angular.module('hugryApp', []);

hugryApp.value('navgridTemplate', 'static/js/app/navgrid/navgrid.html');

hugryApp.controller('hugryController', function($scope, $timeout){

    $timeout(function(){
        $scope.finishedLoading = true;
    }, 1000).then(function(){
        return $timeout(function(){
            $scope.finishedEnteringScriptBlock = true;
        }, 1000);
    }).then(function(){
        return $timeout(function(){
            $scope.finishedEnteringScriptTitle = true;
        }, 500);
    }).then(function(){
        return $timeout(function(){
            $scope.finishedAnimatingScriptBlock = true;
        }, 500);
    }).then(function(){
        return $timeout(function(){
            $scope.finishedEnteringGrid = true;
        }, 500);
    }).then(function(){
        return $timeout(function(){
            $scope.finishedAnimatingGrid = true;
        }, 500);
    });

});
