module elasticui.filters {
    export class RoundFilter {
        constructor() {
            return (input:any) => {
                if (!input) {
                    return input;
                }
                return Math.round(input);
            }
        }
    }

    filters.filter('euiRound', RoundFilter);
}