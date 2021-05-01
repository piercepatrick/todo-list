// to do items class
// has properties title, description, dueDate, priority

export class task {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    setTitle(title) {
        this.title = title
    }
    
    setDescription(description) {
        this.description = description
    }
    
    setDueDate(dueDate) {
        this.dueDate = dueDate
    }
    
    setTitle(priority) {
        this.priority = priority
    }

}