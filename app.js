'use strict'

class DB {
    save(items) {
        console.log('Saving to DB' + items);

    }
}

class MongoDB extends DB {
    save(items) {
        console.log('Saving to MongoDB' + items);
    }
}

class ToDoList {
    items = [1, 2, 3]
    db
    constructor(db) {
        this.db = db
    }
    saveToDB() {
        this.db.save(this.items)
    }
}

const list1 = new ToDoList(new MongoDB())
const list2 = new ToDoList(new DB())
list1.saveToDB()
list2.saveToDB()