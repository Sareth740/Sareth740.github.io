/*! sareth740 - v0.0.1 - 2014-04-21
* Copyright (c) 2014 axiomabsolute; Licensed  */
var hugryApp = angular.module('hugryApp', []);

hugryApp.value('navgridTemplate', 'static/js/app/navgrid/navgrid.html');

var hugryApp = angular.module('hugryApp');

hugryApp.controller('navgrid', function($scope, navgridTemplate){
    var sections = ['Profile', 'Music', 'Scores', 'Equipment', 'Resume', 'Contact'];
    var sectionIcons = ['fa-info', 'fa-play', 'fa-music', 'fa-desktop fa-microphone', 'fa-file-text', 'fa-envelope'];
    var sectionDetails = ['info', 'music', 'scores', 'equipment', 'resume', 'contact'];

    function Section(sectionName, iconName, sectionDetailsTemplate){
        this.SectionName = sectionName;
        this.SectionIcon = iconName;
        this.SectionDetails = sectionDetailsTemplate;
    }

    var defaultSection = new Section("Home", "", "site/base");

    $scope.setSelectedSection = function(section){
        if (section){
            $scope.selectedSection = section;
        } else {
            $scope.selectedSection = defaultSection;
        }
    };

    $scope.selectedSection = defaultSection;

    $scope.navgridTemplate = navgridTemplate;
    $scope.sections = _.map(_.zip(sections, sectionIcons, sectionDetails), function(d){return new Section(d[0], d[1], 'site/' + d[2]);});
});
