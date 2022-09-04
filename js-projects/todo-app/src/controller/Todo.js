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
        this.model.update(entry, checked);
    }
}