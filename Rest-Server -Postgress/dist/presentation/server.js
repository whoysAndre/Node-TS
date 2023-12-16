"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
;
class Server {
    constructor({ port, router }) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.router = router;
    }
    ;
    start() {
        //middlewares
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        //routing
        this.app.use(this.router);
        //Server
        this.app.listen(this.port);
    }
    ;
}
exports.Server = Server;
;
