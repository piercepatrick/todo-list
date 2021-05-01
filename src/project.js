// class project
// has properties name, tasks

export class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName);
      }

    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName);
    }

    addTask(task) {
        if (this.tasks.indexOf(task) > 0) return;
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