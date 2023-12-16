"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoDto = void 0;
;
//El dtos no es mas que una clase 
class CreateTodoDto {
    //En este constructor como params pondremos la data que viene del dtos
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static create(props) {
        const { name, age } = props;
        if (!name && !age)
            return ['El nombre y la edad son requeridas', undefined];
        return [undefined, new CreateTodoDto(name, age)]; //Al hacer en constructor privado solo lo usaremos en esta clase
    }
    ;
}
exports.CreateTodoDto = CreateTodoDto;
;
