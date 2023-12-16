"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class TodosController {
    constructor() {
        this.getTodos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const todos = yield postgres_1.prisma.todo.findMany();
            res.json(todos);
        });
        this.getTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const todoId = parseInt(req.params.id);
            const todo = yield postgres_1.prisma.todo.findFirst({
                where: {
                    id: todoId
                }
            });
            res.json(todo);
        });
        this.createTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createTodoDto] = dtos_1.CreateTodoDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            yield postgres_1.prisma.todo.create({
                data: {
                    name: createTodoDto.name,
                    age: Number(createTodoDto.age)
                }
            });
            res.send('Añadido exitosamente');
        });
        this.updateTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const dataNew = req.body;
            const todoFind = yield postgres_1.prisma.todo.findFirst({
                where: { id }
            });
            if (todoFind) {
                yield postgres_1.prisma.todo.update({
                    where: { id },
                    data: {
                        name: dataNew.name,
                        age: parseInt(dataNew.age)
                    }
                });
                res.send('Actualizado');
            }
            else {
                res.send('User not found');
            }
            ;
        });
        this.deleteTodo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            yield postgres_1.prisma.todo.delete({
                where: { id }
            });
            res.send('Todo delete');
        });
    }
}
exports.TodosController = TodosController;
;
