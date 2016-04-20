module elasticui.directives {
    export class OrFilterDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'EAC';
            directive.scope = true;

            directive.controller = controllers.OrFilterController;
            directive.link = function (scope:any, element:ng.IAugmentedJQuery, attrs: any, filterCtrl:any) {

            }
            return directive;
        }
    }
    directives.directive('euiOrFilter', [OrFilterDirective]);
}