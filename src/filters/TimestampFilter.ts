module elasticui.filters {
    export class TimestampFilter {
        constructor() {
            return (input:any) => {
                return new Date(input).getTime();
            }
        }
    }

    filters.filter('euiTimestamp', TimestampFilter);
}