let tasksDiv = document.getElementById('tasks-div')
let addTaskBtn = document.getElementById('button-add-task')
let addTaskContainer = document.createElement('div')

class UI {
    
    static loadHomepage() {
        UI.addListeners()
    }

    static addListeners() {
        /*let addTaskBtn = document.getElementById('button-add-task')*/
        let addProjectBtn = document.getElementById('button-add-project')

        addTaskBtn.addEventListener('click', UI.displayAddTaskContainer)
        addProjectBtn.addEventListener('click', UI.addProject)

    }


    static displayAddTaskContainer() {

        addTaskBtn.style.display = 'none'
        tasksDiv.appendChild(addTaskContainer)
        addTaskContainer.innerHTML = `
        <form id='addTaskForm'>
            <label for="inputTask">Task:</label><br>
            <input type="text" id="inputTask" name="inputTask"><br>
            <label for="inputDueDate">Due Date:</label><br>
            <input type="text" id="inputDueDate" name="inputDueDate">
        </form>
        <button class='taskContainerBtns' id='taskContainerAddBtn'>Add</button>
        <button class='taskContainerBtns' id='taskContainerCancelBtn'>Cancel</button>
        `
    
        UI.styleTaskContainer()
    }

    static styleTaskContainer() {
        addTaskContainer.style.order = '1'
    
        let taskContainerAddBtn = document.getElementById('taskContainerAddBtn')
        let taskContainerCancelBtn= document.getElementById('taskContainerCancelBtn')
        taskContainerAddBtn.style.display = 'inline-block'
        taskContainerCancelBtn.style.display = 'inline-block'
     
    }

    static addProject() {

    }


    static removeAddTaskBtn() {
        let addTaskBtn = document.getElementById('button-add-task')
        addTaskBtn.style.display = 'none !important'
    }

}

export { UI }