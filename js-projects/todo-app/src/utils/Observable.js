class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(ob => ob !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => {
            observer.update(data);
        })
    }
}