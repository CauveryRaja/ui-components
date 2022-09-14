class Todo {
    constructor(controller) {
        this.controller = controller;
        this.todoList = document.getElementById('todo-list');
    }

    update(todos) {
        this.clear();
        todos.forEach(item => {
            this.todoList.insertAdjacentHTML('beforeend', getTemplate(item));
        });
    }

    getTemplate(todo) {
        return `
            <li class="todo-item">
                <input type="checkbox" name="check" id="check" checked="${todo.checked}">
                <p class="todo-title">${todo.title}</p>
                <button class="delete-todo">X</button>
            </li>
        `
    }

    clear() {
        this.todoList.innerHTML = '';
    }
}

export default Todo;