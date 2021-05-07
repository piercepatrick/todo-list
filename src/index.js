import { UI } from './UI.js'
import { Storage } from './storage.js'

// Selectors
export const todoInput = document.querySelector('.todo-input')
export const todoButton = document.querySelector('.todo-button')
export const todoList = document.querySelector('.todo-list')
export const filterOption = document.querySelector('.filter-todo')
export const filterProject = document.querySelector('.filter-projects')
export const addProjectBtn = document.querySelector('#add-project')
export const projectMenuDiv = document.querySelector('.project-menu')
export const addProjectDiv = document.querySelector('.add-project-input')

// Event Listeners
document.addEventListener('DOMContentLoaded', Storage.getTodos)
todoButton.addEventListener('click', UI.addTodo)
todoList.addEventListener('click', UI.deleteCheck)
filterOption.addEventListener('click', UI.filterTodo)
filterProject.addEventListener('change', UI.filterProjects)
addProjectBtn.addEventListener('click', UI.addProject)
// TO DO:
// 
// 
// Projects:
// Load in on default project
// 
//  
// 
// load in all projects into select bar
//
// 
//  

