

class UI {

    loadHomepage() {
        this.addListeners()
        
    }

    addListeners() {
        let addTaskBtn = document.getElementById('button-add-task')
        let addProjectBtn = document.getElementById('button-add-project')

        addTaskBtn.addEventListener('click', this.addTask)
        addProjectBtn.addEventListener('click', this.addProject)

    }


    addTask() {
        
    }

    addProject() {

    }


    removeAddTaskBtn() {
        let addTaskBtn = document.getElementById('button-add-task')
        addTaskBtn.style.display = 'none !important'
    }

}

export { UI }