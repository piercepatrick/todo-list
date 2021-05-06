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
    
        todos.forEach(function(todo) {
            // Todo Div
            const todoDiv = document.createElement('div')
            todoDiv.classList.add('todo')
            // Create LI
            const newTodo = document.createElement('li')
            newTodo.innerText = todo.description
            newTodo.classList.add('todo-item')
            todoDiv.appendChild(newTodo)

            // CREATE TODO OBJECT
            
            // SAVE TODO TO LOCAL STORAGE
            
            // DUE DATE 
            
            const dueDateInput = document.createElement('h6')
            dueDateInput.innerText = todo.dueDate
            dueDateInput.classList.add('duedate-input')
            todoDiv.appendChild(dueDateInput)
            
            // PRIORITY DROPDOWN
            const priorityDropdown = document.createElement('select')
            priorityDropdown.innerHTML = `
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            `
            priorityDropdown.classList.add('priority-dropdown')
            priorityDropdown.value = todo.priority
            todoDiv.appendChild(priorityDropdown)
            

            // CHECK MARK BUTTON
            const completedButton = document.createElement('button')
            completedButton.innerHTML = '<i class="fas fa-check"></i>'
            completedButton.className = 'complete-btn'
            todoDiv.appendChild(completedButton)
            // TRASH BUTTON
            const trashButton = document.createElement('button')
            trashButton.innerHTML = '<i class="fas fa-trash"></i>'
            trashButton.className = 'trash-btn'
            todoDiv.appendChild(trashButton)
            // APPEND TO LIST
            todoList.appendChild(todoDiv)
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
        
        //const toDoIndex = todos.indexOf(find(x => x.id === todoID))
        const toDoIndex = todos.map(function(x) {return x.id; }).indexOf(todoID);
        console.log(toDoIndex)
        
        todos.splice(toDoIndex, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

}