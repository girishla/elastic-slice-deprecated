module elasticui.directives {
    export class SortDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.scope = true;

            directive.controller = controllers.SortController;
            directive.link = function (scope:any, element:ng.IAugmentedJQuery, attrs: any, sortCtrl:any) {
                scope.$watch(element.attr('eui-sort') + " | euiCached", (val:any) => scope.sorting.sort = val);
                
                var enabled = false;
                var enabledAttr = element.attr('eui-enabled');
                if (enabledAttr) {
                    scope.$watch(enabledAttr, (val:any) => scope.sorting.enabled = val);
                    enabled = scope.$eval(enabledAttr);
                }

                scope.sorting = {
                    sort: scope.$eval(element.attr('eui-sort') + " | euiCached"),
                    enabled: enabled
                };

                sortCtrl.init();
            }
            return directive;
        }
    }
    directives.directive('euiSort', [SortDirective]);
}