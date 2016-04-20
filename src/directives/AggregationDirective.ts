module elasticui.directives {
    export class AggregationDirective {
        constructor() {
            var directive: ng.IDirective = {};

            directive.restrict = 'EAC';
            directive.scope = true;

            directive.controller = controllers.AggregationController;
            directive.link = function (scope:any, element:ng.IAugmentedJQuery, attrs: any, aggCtrl:any) {
                scope.$watch(element.attr('eui-aggregation') + " | euiCached", (val:any) => scope.aggregation.agg = val);

                var filterSelf = true;
                var filterSelfAttr = element.attr('eui-filter-self');
                if (filterSelfAttr) {
                    scope.$watch(filterSelfAttr, (val:any) => scope.aggregation.filterSelf = val);
                    filterSelf = scope.$eval(filterSelfAttr);
                }

                scope.aggregation = {
                    agg: scope.$eval(element.attr('eui-aggregation') + " | euiCached"),
                    filterSelf: filterSelf
                };

                aggCtrl.init();
            }
            return directive;
        }
    }
    directives.directive('euiAggregation', [elasticui.directives.AggregationDirective]);
}
