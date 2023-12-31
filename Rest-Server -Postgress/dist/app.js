"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const app_routes_1 = require("./presentation/app.routes");
const server_1 = require("./presentation/server");
(() => {
    main();
})();
function main() {
    const server = new server_1.Server({
        port: envs_1.envs.PORT,
        router: app_routes_1.AppRoutes.routes
    });
    server.start();
}
;
