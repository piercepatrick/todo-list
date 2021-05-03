// to do items class
// has properties category, description, dueDate, priority, 

export class Task {
    constructor(category, description, dueDate, priority) {
        this.category = category
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    setCategory(category) {
        this.category = category
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

    getCategory() {
        return this.category
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