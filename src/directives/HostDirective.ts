module elasticui.directives {
    export class HostDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.scope = true;

            directive.controller = controllers.HostController;
            directive.link = function (scope:any, element:ng.IAugmentedJQuery, attrs: any, hostCtrl:any) {
                scope.$watch(element.attr('eui-host'), (val:any) => scope.host = val);

                scope.host = scope.$eval(element.attr('eui-host'));

                hostCtrl.init();
            }
            return directive;
        }
    }
    directives.directive('euiHost', [HostDirective]);
}
