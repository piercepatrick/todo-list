import { todoInput, todoButton, todoList, filterOption } from './index.js'
import { Todo } from './todo.js'


export class Storage {

    static getTodos() {
        let todos
        if (localStorage.getItem("todos") === null) {
            todos = []
        }
        else  {
            todos = JSON.parse(localStorage.getItem("todos"))
        }
        let i = "0"
        todos.forEach(function(todo) {
            // TODO OBJECT CHANGE ID
            todo.id = i 
            if (todo.project == 'Default Project') {
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
        
            // ADD LISTENER TO PRIORITY DROPDOWN 
            priorityDropdown.addEventListener('change', function(e) {
                let todos
                let priorityID = e.target.id
                todos = JSON.parse(localStorage.getItem("todos"))
                todos.find(x => x.id === priorityID).priority = this.value
                localStorage.setItem('todos', JSON.stringify(todos))
            }, false)
            
        }
            // INCREMENT i
            i = parseInt(i)
            i++
            i = i.toString()
            })
    }

    static saveLocalTodos(todo) {
        // CHECK IF TODOS ARE ALREADY SAVED
        let todos
        if (localStorage.getItem("todos") === null) {
            todos = []
        }
        else  {
            todos = JSON.parse(localStorage.getItem("todos"))
        }
        todos.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    static removeLocalTodo(todo, todoID) {
        let todos
        if (localStorage.getItem("todos") === null) {
            todos = []
        }
        else  {
            todos = JSON.parse(localStorage.getItem("todos"))
        }
        const toDoIndex = todos.map(function(x) {return x.id; }).indexOf(todoID);
        todos.splice(toDoIndex, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

}