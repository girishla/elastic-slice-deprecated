module elasticui.directives {
    export class QueryDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.scope = true;
            directive.controller = controllers.QueryController;
            directive.link = function (scope:any, element:ng.IAugmentedJQuery, attrs: any, queryCtrl:any) {
                scope.$watch(element.attr('eui-query') + " | euiCached", (val:any) => scope.query.query= val);
                
                var enabled = false;
                var enabledAttr = element.attr('eui-enabled');
                if (enabledAttr) {
                    scope.$watch(enabledAttr, (val:any) => scope.query.enabled = val);
                    enabled = scope.$eval(enabledAttr);
                }

                scope.query = {
                    query: scope.$eval(element.attr('eui-query') + " | euiCached"),
                    enabled: enabled
                };

                queryCtrl.init();
            }
            return directive;
        }
    }
    directives.directive('euiQuery', [QueryDirective]);
}