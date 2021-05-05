import { todoInput, todoButton, todoList, filterOption } from './index.js'

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
            newTodo.innerText = todo
            newTodo.classList.add('todo-item')
            todoDiv.appendChild(newTodo)
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

    static removeLocalTodo(todo) {
        let todos
        if (localStorage.getItem("todos") === null) {
            todos = []
        }
        else  {
            todos = JSON.parse(localStorage.getItem("todos"))
        }
    
        const toDoIndex = todos.indexOf(todo.children[0].innerText)
        todos.splice(toDoIndex, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

}