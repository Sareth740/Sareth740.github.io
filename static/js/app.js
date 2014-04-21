/*! sareth740 - v0.0.1 - 2014-04-20
* Copyright (c) 2014 axiomabsolute; Licensed  */
var hugryApp = angular.module('hugryApp', []);

hugryApp.value('navgridTemplate', 'static/js/app/navgrid/navgrid.html');

var hugryApp = angular.module('hugryApp');

hugryApp.controller('navgrid', function($scope, navgridTemplate){
    var sections = ['Profile', 'Music', 'Sheet Music', 'Equipment', 'Resume', 'Contact'];
    var sectionIcons = ['fa-info-circle', 'fa-play-circle', 'fa-music', 'fa-desktop fa-microphone', 'fa-file-text', 'fa-envelope'];

    function Section(sectionName, iconName){
        this.SectionName = sectionName;
        this.SectionIcon = iconName;
    }

    $scope.navgridTemplate = navgridTemplate;
    $scope.sections = _.map(_.zip(sections, sectionIcons), function(d){return new Section(d[0], d[1]);});
});
