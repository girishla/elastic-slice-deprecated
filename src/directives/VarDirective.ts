module elasticui.directives {
    // should not be used (for development purposes atm)
    export class VarDirective {
        static $inject = ['$timeout'];
        constructor($timeout:ng.ITimeoutService) {
            var directive: ng.IDirective = {};
            directive.restrict = 'EAC';
            directive.scope = false;
            directive.transclude = false;
            
            directive.link = <any>{
                pre: function (scope:any, element:ng.IAugmentedJQuery, attrs: any) {
                    var key = element.attr('eui-key');
                    scope.$watch(element.attr('eui-value'), (newVal:any, oldVal:any) => {
                        if (!angular.equals(newVal, oldVal)) {
                            scope[key] = newVal;
                        }
                    }, true);
                    scope[key] = scope.$eval(element.attr('eui-value'));
                }
            }
            return directive;
        }
    }
    directives.directive('euiVar', [VarDirective]);
}