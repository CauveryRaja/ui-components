class Todo {
    constructor(model) {
        this.model = model;
    }

    handleEvent(event) {
        switch(event.type) {
            case 'checked': checkListener(event.target, event.target.value);
        }
    }

    checkListener(entry, checked) {
        // Check this
        // this.model.todos = [{
        //     id: 'todo-1',
        //     title: 'First todo',
        //     completed: false
        // }]
        this.model.update(entry, checked);
    }
}

export default Todo;