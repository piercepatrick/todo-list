let tasksDiv = document.getElementById('tasks-div')
let addTaskBtn = document.getElementById('button-add-task')
let addTaskContainer = document.createElement('div')
let addProjectBtn = document.getElementById('button-add-project')

class UI {
    
    static loadHomepage() {
        UI.addListeners()
    }

    static addListeners() {
        addTaskBtn.addEventListener('click', UI.displayAddTaskContainer)
        addProjectBtn.addEventListener('click', UI.addProject)

    }


    static displayAddTaskContainer() {
        addTaskBtn.style.display = 'none'
        tasksDiv.appendChild(addTaskContainer)
        addTaskContainer.innerHTML = `
        <form action=''>
            <label for="inputTask" >Task:</label><br>
            <textarea name="textarea"></textarea><br>
            <label for="inputDueDate" >Due Date:</label><br>
            <input type="text" id="inputDueDate" name="inputDueDate"><br>
            <input type='submit' value='Submit' class='taskContainerBtns' id='taskContainerAddBtn'>
            <input type='button' value='Cancel' class='taskContainerBtns' id='taskContainerCancelBtn'>
        </form>
        `
        
        UI.styleTaskContainer()
    }

    static styleTaskContainer() {
        addTaskContainer.style.order = '1'      

        let taskContainerAddBtn = document.getElementById('taskContainerAddBtn')
        let taskContainerCancelBtn= document.getElementById('taskContainerCancelBtn')
        taskContainerAddBtn.style.display = 'inline-block'
        taskContainerCancelBtn.style.display = 'inline-block'
        
        taskContainerAddBtn.addEventListener('click', UI.addTaskToBoard)
        
        
    
    }

    static addTaskToBoard(e) {
        e.preventDefault()
    }

    static removeAddTaskContainer() {
        addTaskContainer.style.display = 'none'

    }

    static addProject() {

    }

    static showAddTaskBtn() {
        addTaskBtn.style.display = 'block'
    }


}

export { UI }