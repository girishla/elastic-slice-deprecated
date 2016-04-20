module elasticui.directives {
    export class IndexDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'EAC';
            directive.scope = false;

            directive.controller = controllers.IndexController;
            directive.link = function (scope:any, element:ng.IAugmentedJQuery, attrs: any, indexCtrl: controllers.IndexController) {
                scope.$watch(attrs.euiIndex, (val:any) => {
                    indexCtrl.indexVM.index = val;
                });
                indexCtrl.indexVM.index = scope.$eval(attrs.euiIndex);
            }
            return directive;
        }
    }
    directives.directive('euiIndex', [IndexDirective]);
}