import { Todo } from './todo.js'
import { Project } from './project.js'
import { Storage } from './storage.js'
import { todoInput, todoButton, todoList, filterOption } from './index.js'

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
        // SAVE TODO TO LOCAL STORAGE
        Storage.saveLocalTodos(todoInput.value)
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
        // CLEAR todoInput VALUE
        todoInput.value = ''
    }

    static deleteCheck(e) {
        const item = e.target

        // DELETE TODO
        if (item.classList[0] === 'trash-btn') {
            const todo = item.parentElement
            // ANIMATION
            todo.classList.add('fall')
            Storage.removeLocalTodo(todo)
            todo.addEventListener('transitionend', function() {
                todo.remove()
            })
            
        }
    
        // CHECK MARK
        if (item.classList[0] === 'complete-btn') {
            const todo = item.parentElement
            todo.classList.toggle('completed')
        }
    }

    static filterTodo(e) {
        const todos = todoList.childNodes
        todos.forEach(function(todo) {
            switch(e.target.value) {
                case('all'):
                    todo.style.display = 'flex'
                    break
                case('completed'):
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex'
                    }
                    else {
                        todo.style.display = 'none'
                    }
                    break
                case('uncompleted'):
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex'
                    }
                    else {
                        todo.style.display = 'none'
                    }
                    break
    
                
            } 
        })
    }



}

export { UI }