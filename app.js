'use strict'

const task = {
    title: 'My task',
    dueTo: new Date('2023/01/01'),
    get overdue() {
        return this.dueTo < new Date();
    },
    set overdue(value) {
        if (!value) {
            this.dueTo = new Date();
        }
    }
}
console.log(task.overdue);
task.overdue = false
console.log(task.overdue);

class Task {
    constructor(title, dueTo) {
        this.title = title;
        this.dueTo = dueTo;
    }
    get overdue() {
        return this.dueTo < new Date();
    }
    set dueTo(date) {
        if (date < new Date()) {
            return
        }
        this._dueTo = date
    }
}
const newTask = new Task('My task', new Date('2024/01/11'));
newTask.dueTo = new Date('2023/01/02');
console.log(newTask._dueTo);