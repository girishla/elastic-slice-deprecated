module elasticui.services {
    export class ElasticService {
        public client:any;
        private esFactory:any;
        private host:any;

        static $inject = ['esFactory', 'euiHost'];
        constructor(esFactory:any, euiHost:any) {
            this.esFactory = esFactory;
            this.setHost(euiHost);
        }

        public setHost(host:any) {
            if (host === this.host) {
                return false;
            }

            this.host = host;
            this.client = this.esFactory({
                host: host,
                calcDeadTimeout: "flat"
            });

            return true;
        }
    }
    services.service('es', ElasticService);
}
