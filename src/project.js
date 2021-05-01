// class project
// has properties name, tasks

export class Project {
    constructor(name, tasks) {
        this.name = name
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(task) {
        let index = this.tasks.indexOf(task)
        if (index > -1) {
            this.tasks.splice(index, 1)
        }
    }

    setName(name) {
        this.name = name
    }

    getName(name) {
        return this.name
    }

} 