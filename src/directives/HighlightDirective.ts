module elasticui.directives {
    export class HighlightDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'A';
            directive.scope = true;

            directive.controller = controllers.HighlightController;
            directive.link = function (scope:any, element:ng.IAugmentedJQuery, attrs: any, highlightCtrl:any) {
                scope.$watch(element.attr('eui-highlight') + " | euiCached", (val:any) => scope.highlighting.highlight = val);

                var enabled = false;
                var enabledAttr = element.attr('eui-enabled');
                if (enabledAttr) {
                    scope.$watch(enabledAttr, (val:any) => scope.highlighting.enabled = val);
                    enabled = scope.$eval(enabledAttr);
                }

                scope.highlighting = {
                    highlight: scope.$eval(element.attr('eui-highlight') + " | euiCached"),
                    enabled: enabled
                };

                highlightCtrl.init();
            }
            return directive;
        }
    }
    directives.directive('euiHighlight', [HighlightDirective]);
}
