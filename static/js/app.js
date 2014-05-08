/*! sareth740 - v0.0.1 - 2014-05-07
* Copyright (c) 2014 axiomabsolute; Licensed  */
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

var hugryApp = angular.module('hugryApp');

hugryApp.controller('navgrid', function($scope, $timeout, navgridTemplate){
    var sections = ['Profile', 'Music', 'Scores', 'Equipment', 'Resume', 'Contact'];
    var sectionIcons = ['fa-info', 'fa-play', 'fa-music', 'fa-desktop fa-microphone', 'fa-file-text', 'fa-envelope'];
    var sectionDetails = ['info', 'music', 'scores', 'equipment', 'resume', 'contact'];

    function Section(sectionName, iconName, sectionDetailsTemplate){
        this.SectionName = sectionName;
        this.SectionIcon = iconName;
        this.SectionDetails = sectionDetailsTemplate;
    }

    var defaultSection = null; //new Section("Home", "", "site/base");

    $scope.setSelectedSection = function(section){
        if ($scope.selectedSection && $scope.selectedSection.SectionDetails === section.SectionDetails){
            $scope.selectedSection = defaultSection;
        }
        else if (section){
            $scope.selectedSection = section;
        } else {
            $scope.selectedSection = defaultSection;
        }
    };

    $scope.selectedSection = defaultSection;

    $scope.navgridTemplate = navgridTemplate;
    $scope.sections = _.map(_.zip(sections, sectionIcons, sectionDetails), function(d){return new Section(d[0], d[1], 'site/' + d[2]);});
});
