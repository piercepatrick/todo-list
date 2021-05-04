import { Task } from './task.js'
import { Project } from './project.js'

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
            <label for="inputCategory" >Category:</label><br>
            <input type="text" id="inputCategory" name="inputCategory"><br>
            <label for="inputTask" >Task:</label><br>
            <textarea name="textarea" id='inputTask'></textarea><br>
            <label for="inputDueDate" >Due Date:</label><br>
            <input type="date" id="inputDueDate" name="inputDueDate"><br>
            <label for="inputPriority" >Priority:</label><br>
            <select name="inputPriority" id="inputPriority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select> <br>
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
        
        taskContainerAddBtn.addEventListener('click', UI.addTaskToProject)
        
        
    
    }

    static addTaskToProject(e) {
        //e.preventDefault()
        let taskCategory = document.getElementById('inputCategory')
        let taskDecription = document.getElementById('inputTask')
        let taskDueDate = document.getElementById('inputDueDate')
        let taskPriority = document.getElementById('inputPriority')
        let task = new Task(taskCategory, taskDecription, taskDueDate, taskPriority)
        let defaultProject = new Project('default')
        defaultProject.addTask(task)
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