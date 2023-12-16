"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const todos_routes_1 = require("./todos/todos.routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/todos', todos_routes_1.TodosRoutes.routes);
        return router;
    }
    ;
}
exports.AppRoutes = AppRoutes;
;
