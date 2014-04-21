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
