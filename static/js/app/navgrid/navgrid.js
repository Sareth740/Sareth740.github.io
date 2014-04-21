var hugryApp = angular.module('hugryApp');

hugryApp.controller('navgrid', function($scope, navgridTemplate){
    var sections = ['Music', 'Profile', 'Sheet Music', 'Equipment', 'Performances', 'Contact'];
    var sectionIcons = ['fa-play-circle', 'fa-info-circle', 'fa-music', 'fa-desktop fa-microphone', 'fa-file-text', 'fa-envelope'];

    function Section(sectionName, iconName){
        this.SectionName = sectionName;
        this.SectionIcon = iconName;
    }

    $scope.navgridTemplate = navgridTemplate;
    $scope.sections = _.map(_.zip(sections, sectionIcons), function(d){return new Section(d[0], d[1]);});
});
