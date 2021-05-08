import { Todo } from './todo.js'
import { Storage, loadTodos } from './storage.js'
import { todoInput,  todoList,  filterProject,  addProjectDiv } from './index.js'
export { i }

let i = "0"

class UI {
    
    static addTodo(event) {
        event.preventDefault()
        // Todo Div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        // Create LI
        const newTodo = document.createElement('li')
        newTodo.innerText = todoInput.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        // CREATE TODO OBJECT
        let todoObject = new Todo(i, todoInput.value, false, "Set Due Date", "High", filterProject.value)
        // SAVE TODO TO LOCAL STORAGE
        Storage.saveLocalTodos(todoObject)
        // DUE DATE 
        const dueDateInput = document.createElement('input')
        dueDateInput.type = 'date'
        dueDateInput.classList.add('duedate-input')
        dueDateInput.setAttribute("id", i)
        todoDiv.appendChild(dueDateInput)
        // PRIORITY DROPDOWN
        const priorityDropdown = document.createElement('select')
        priorityDropdown.innerHTML = `
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        `
        priorityDropdown.classList.add('priority-dropdown')
        priorityDropdown.setAttribute("id", i)
        todoDiv.appendChild(priorityDropdown) 
        // CHECK MARK BUTTON
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.className = 'complete-btn'
        completedButton.setAttribute("id", i)
        todoDiv.appendChild(completedButton)
        // TRASH BUTTON
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.className = 'trash-btn'
        trashButton.setAttribute("id", i)
        todoDiv.appendChild(trashButton)
        todoDiv.setAttribute("id", i)
        // APPEND TO LIST
        todoList.appendChild(todoDiv)
        // CLEAR todoInput VALUE
        todoInput.value = ''
        // ADD LISTENER TO PRIORITY DROPDOWN
        priorityDropdown.addEventListener('change', function(e) {
            let todos
            let priorityID = e.target.id
            todos = JSON.parse(localStorage.getItem("todos"))
            todos.find(x => x.id === priorityID).priority = this.value
            localStorage.setItem('todos', JSON.stringify(todos))
        }, false)
        // ADD LISTENER TO DUE DATE
        dueDateInput.addEventListener('change', function(e) {
            let todos
            let dueDateID = e.target.id
            todos = JSON.parse(localStorage.getItem("todos"))
            todos.find(x => x.id === dueDateID).dueDate = this.value
            localStorage.setItem('todos', JSON.stringify(todos))
        }, false)
        // INCREMENT i
        i = parseInt(i)
        i++
        i = i.toString()
    }

    static deleteCheck(e) {
        const item = e.target
        // DELETE TODO
        if (item.classList[0] === 'trash-btn') {
            const todo = item.parentElement
            let todoID = item.id
            // ANIMATION
            todo.classList.add('fall')
            Storage.removeLocalTodo(todoID)
            todo.addEventListener('transitionend', function() {
                todo.remove()
            })
        }

        // CHECK MARK
        if (item.classList[0] === 'complete-btn') {
            const todo = item.parentElement
            console.log(todo)
            todo.classList.toggle('completed')
            let todos
            let isCompletedID = item.id
            todos = JSON.parse(localStorage.getItem("todos"))
            todos.find(x => x.id === isCompletedID).isCompleted = true
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }

    static filterTodo(e) {
        const projectName = filterProject.value
        let todos = loadTodos()
        todos.forEach(function(todo) {
            if (todo.project == projectName) {
                let todoDivID
                let Objectid = todo.id
                todoDivID = document.getElementById(Objectid)
                switch(e.target.value) {
                    case('all'):
                        todoDivID.style.display = 'flex'
                        break
                    case('completed'):
                        if (todoDivID.classList.contains('completed')) {
                            todoDivID.style.display = 'flex'
                        }
                        else {
                            todoDivID.style.display = 'none'
                        }
                        break
                    case('uncompleted'):
                        if (!todoDivID.classList.contains('completed')) {
                            todoDivID.style.display = 'flex'
                        }
                        else {
                            todoDivID.style.display = 'none'
                        }
                        break
                }
            }
        })
    }

    static filterProjects(e) {
        const projectName = e.target.value
        let todos = loadTodos()
        todos.forEach(function(todo) {
            let todoDivID
            let Objectid = todo.id
            todoDivID = document.getElementById(Objectid)
            if (todo.project == projectName) {
                todoDivID.style.display = 'flex'
            }
            else {
                todoDivID.style.display = 'none'                
            }  
        })
    }

    static addProject() {
        const inputProjectTextBar = document.createElement('input')
        inputProjectTextBar.type = 'text'
        addProjectDiv.appendChild(inputProjectTextBar)
        inputProjectTextBar.classList.add('input-project-text-bar')
        inputProjectTextBar.placeholder = 'New Project Name'
        const inputProjectBtn = document.createElement('button')
        addProjectDiv.appendChild(inputProjectBtn)
        inputProjectBtn.classList.add('input-project-btn')
        inputProjectBtn.innerText ='Add'
        inputProjectBtn.addEventListener('click', function() {
            let newProjectOption = document.createElement('option')
            newProjectOption.value = inputProjectTextBar.value
            newProjectOption.innerText = inputProjectTextBar.value
            newProjectOption.id = inputProjectTextBar.value
            filterProject.appendChild(newProjectOption)
            newProjectOption.selected = 'true'
            inputProjectTextBar.remove()
            inputProjectBtn.remove()
            cancelInputProjectBtn.remove()
            let todos = loadTodos()
            todos.forEach(function(todo) {
                let todoDivID
                let Objectid = todo.id
                todoDivID = document.getElementById(Objectid)
                if (todo.project == newProjectOption.value) {
                    todoDivID.style.display = 'flex'
                }
                else {
                    todoDivID.style.display = 'none'                
                }  
            })
        })
        let cancelInputProjectBtn = document.createElement('button')
        addProjectDiv.appendChild(cancelInputProjectBtn)
        cancelInputProjectBtn.classList.add('cancel-input-project-btn')
        cancelInputProjectBtn.innerText ='Cancel'
        cancelInputProjectBtn.addEventListener('click', function() {
            inputProjectTextBar.remove()
            inputProjectBtn.remove()
            cancelInputProjectBtn.remove()
        })
    }

    static deleteProject() {
        let projectToDelete = filterProject.value
        if (projectToDelete == 'Default Project') {
            alert('Cant Delete Default Project!')
        }
        else {
           for (var j=0; j<filterProject.length; j++) {
                if (filterProject.options[j].value == projectToDelete)
                    filterProject.remove(j);
                    Storage.deleteProjectTodos(projectToDelete)
            }
            let projectName = filterProject.value
            let todos = loadTodos()
            todos.forEach(function(todo) {
                let todoDivID
                let Objectid = todo.id
                todoDivID = document.getElementById(Objectid)
                if (todo.project == projectName) {
                    todoDivID.style.display = 'flex'
                }
                else {
                    todoDivID.style.display = 'none'                
                }  
            })

        }
    }
}

export { UI }