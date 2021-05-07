import { Todo } from './todo.js'
import { Project } from './project.js'
import { Storage } from './storage.js'
import { todoInput, todoButton, todoList, filterOption } from './index.js'
let i = "0"
export { i }
class UI {
    
    static addTodo(event) {
        event.preventDefault()

        // make i last  objects id + 1

        // Todo Div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        // Create LI
        const newTodo = document.createElement('li')
        newTodo.innerText = todoInput.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)


        // CREATE TODO OBJECT
        let todoObject = new Todo(i, todoInput.value, false, "Set Due Date", "High")
        // SAVE TODO TO LOCAL STORAGE
        Storage.saveLocalTodos(todoObject)
        // DUE DATE 
        const dueDateInput = document.createElement('input')
        dueDateInput.type = 'date'
        //dueDateInput.innerText = todoObject.dueDate
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
        todoDiv.appendChild(completedButton)
        // TRASH BUTTON
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.className = 'trash-btn'
        trashButton.setAttribute("id", i)
        todoDiv.appendChild(trashButton)
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
            Storage.removeLocalTodo(todo, todoID)
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