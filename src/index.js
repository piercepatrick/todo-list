import { UI } from './UI.js'
import { Storage } from './storage.js'

// Selectors
export const todoInput = document.querySelector('.todo-input')
export const todoButton = document.querySelector('.todo-button')
export const todoList = document.querySelector('.todo-list')
export const filterOption = document.querySelector('.filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded', Storage.getTodos)
todoButton.addEventListener('click', UI.addTodo)
todoList.addEventListener('click', UI.deleteCheck)
filterOption.addEventListener('click', UI.filterTodo)

