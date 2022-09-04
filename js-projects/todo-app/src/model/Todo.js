class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
    }

    remove(todo) {
        this.todos = this.todos.filter(item => item !== todo);
    }

    update(todo, value) {
        for(let i=0; i<this.todos.length; i++) {
            if(this.todos[i] === todo) {
                this.todos[i].completed = value;
            }
        }
    }
}

export default Todo;