class Todo {
    constructor(controller) {
        this.controller = controller;
        this.todoList = document.getElementById('todo-list');
    }

    // Think how to render list of todos...
    render(todo) {
        return `
            <li class="todo-item">
                <input type="checkbox" name="check" id="check">
                <p class="todo-title">${todo.title}</p>
                <button class="delete-todo">X</button>
            </li>
        `
    }

    update() {
    }
}

export default Todo;