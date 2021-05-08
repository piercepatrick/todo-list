import {  todoList, filterProject } from './index.js'

export function loadTodos() {
    let todos
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else  {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}

export class Storage {
    
    static getTodos() {
        let todos = loadTodos()
        let i = "0"
        todos.forEach(function(todo) {
            // TODO OBJECT CHANGE ID
            todo.id = i 
            //if (todo.project == 'Default Project') {
            // Todo Div
            const todoDiv = document.createElement('div')
            todoDiv.classList.add('todo')
            // Create LI
            const newTodo = document.createElement('li')
            newTodo.innerText = todo.description
            newTodo.classList.add('todo-item')
            todoDiv.appendChild(newTodo) 
            // DUE DATE 
            const dueDateInput = document.createElement('input')
            dueDateInput.type = 'date'
            if (todo.dueDate != 'Set Due Date') {
                dueDateInput.value = todo.dueDate
            }
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
            priorityDropdown.value = todo.priority
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
            // ADD LINE THROUGH TODO ITEM IF COMPLETED
            if (todo.isCompleted == true) {
                todoDiv.classList.toggle('completed')
            }
            // ONLY DISPLAY TODOS APART OF DEFAULT PROJECT
            if (todo.project == 'Default Project') {
                todoDiv.style.display = 'flex'
            }
            else {
                todoDiv.style.display = 'none'
                let newProjectOption = document.createElement('option')
                newProjectOption.value = todo.project
                newProjectOption.innerText = todo.project
                filterProject.appendChild(newProjectOption)
            }
            // ADD LISTENER TO PRIORITY DROPDOWN 
            priorityDropdown.addEventListener('change', function(e) {
                let todos
                let priorityID = e.target.id
                todos = JSON.parse(localStorage.getItem("todos"))
                todos.find(x => x.id === priorityID).priority = this.value
                localStorage.setItem('todos', JSON.stringify(todos))
            }, false)
            
        
            // INCREMENT i
            i = parseInt(i)
            i++
            i = i.toString()
            })
    }

    static saveLocalTodos(todo) {
        // CHECK IF TODOS ARE ALREADY SAVED
        let todos = loadTodos()
        todos.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    static removeLocalTodo(todoID) {
        let todos = loadTodos()
        const toDoIndex = todos.map(function(x) {return x.id; }).indexOf(todoID);
        todos.splice(toDoIndex, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    static deleteProjectTodos(projectToDelete) {
        let todos = loadTodos()
        todos.forEach(function(todo) {
            if (todo.project == projectToDelete) {
                const toDoIndex = todos.map(function(x) {return x.id; }).indexOf(todo.id);
                todos.splice(toDoIndex, 1)
                let todoDivID = document.getElementById(todo.id)
                todoDivID.style.display = 'none'
            }
        })
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}