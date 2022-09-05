import TodoModel from "./src/model/Todo.js";
import TodoController from './src/controller/Todo.js';
import TodoView from './src/view/Todo.js';

(function () {
    const model = new TodoModel();
    const controller = new TodoController(model);
    const view = new TodoView(controller);
})();