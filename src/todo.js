export class Todo {
    constructor(id,description,isCompleted,dueDate, priority, project) {
        this.id = id
        this.description = description
        this.isCompleted = isCompleted
        this.dueDate = dueDate
        this.priority = priority
        this.project = project
    }

    setID(id) {
        this.id = id
    }

    setcompleted(isCompleted) {
        this.isCompleted = isCompleted
    }
    
    setDescription(description) {
        this.description = description
    }
    
    setDueDate(dueDate) {
        this.dueDate = dueDate
    }
    
    setPriority(priority) {
        this.priority = priority
    }

    getID() {
        return this.id
    }
    
    getcompleted() {
        return this.isCompleted
    }

    getDescription() {
        return this.description
    }

    getDueDate() {
        return this.dueDate
    }

    getPriority() {
        return this.priority
    }

}