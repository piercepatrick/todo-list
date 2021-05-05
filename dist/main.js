/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\nclass UI {\r\n    \r\n    static addTodo(event) {\r\n        event.preventDefault()\r\n        // Todo Div\r\n        const todoDiv = document.createElement('div')\r\n        todoDiv.classList.add('todo')\r\n        // Create LI\r\n        const newTodo = document.createElement('li')\r\n        newTodo.innerText = _index_js__WEBPACK_IMPORTED_MODULE_3__.todoInput.value\r\n        newTodo.classList.add('todo-item')\r\n        todoDiv.appendChild(newTodo)\r\n        // SAVE TODO TO LOCAL STORAGE\r\n        _storage_js__WEBPACK_IMPORTED_MODULE_2__.Storage.saveLocalTodos(_index_js__WEBPACK_IMPORTED_MODULE_3__.todoInput.value)\r\n        // CHECK MARK BUTTON\r\n        const completedButton = document.createElement('button')\r\n        completedButton.innerHTML = '<i class=\"fas fa-check\"></i>'\r\n        completedButton.className = 'complete-btn'\r\n        todoDiv.appendChild(completedButton)\r\n        // TRASH BUTTON\r\n        const trashButton = document.createElement('button')\r\n        trashButton.innerHTML = '<i class=\"fas fa-trash\"></i>'\r\n        trashButton.className = 'trash-btn'\r\n        todoDiv.appendChild(trashButton)\r\n        // APPEND TO LIST\r\n        _index_js__WEBPACK_IMPORTED_MODULE_3__.todoList.appendChild(todoDiv)\r\n        // CLEAR todoInput VALUE\r\n        _index_js__WEBPACK_IMPORTED_MODULE_3__.todoInput.value = ''\r\n    }\r\n\r\n    static deleteCheck(e) {\r\n        const item = e.target\r\n\r\n        // DELETE TODO\r\n        if (item.classList[0] === 'trash-btn') {\r\n            const todo = item.parentElement\r\n            // ANIMATION\r\n            todo.classList.add('fall')\r\n            _storage_js__WEBPACK_IMPORTED_MODULE_2__.Storage.removeLocalTodo(todo)\r\n            todo.addEventListener('transitionend', function() {\r\n                todo.remove()\r\n            })\r\n            \r\n        }\r\n    \r\n        // CHECK MARK\r\n        if (item.classList[0] === 'complete-btn') {\r\n            const todo = item.parentElement\r\n            todo.classList.toggle('completed')\r\n        }\r\n    }\r\n\r\n    static filterTodo(e) {\r\n        const todos = _index_js__WEBPACK_IMPORTED_MODULE_3__.todoList.childNodes\r\n        todos.forEach(function(todo) {\r\n            switch(e.target.value) {\r\n                case('all'):\r\n                    todo.style.display = 'flex'\r\n                    break\r\n                case('completed'):\r\n                    if (todo.classList.contains('completed')) {\r\n                        todo.style.display = 'flex'\r\n                    }\r\n                    else {\r\n                        todo.style.display = 'none'\r\n                    }\r\n                    break\r\n                case('uncompleted'):\r\n                    if (!todo.classList.contains('completed')) {\r\n                        todo.style.display = 'flex'\r\n                    }\r\n                    else {\r\n                        todo.style.display = 'none'\r\n                    }\r\n                    break\r\n    \r\n                \r\n            } \r\n        })\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoInput\": () => (/* binding */ todoInput),\n/* harmony export */   \"todoButton\": () => (/* binding */ todoButton),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList),\n/* harmony export */   \"filterOption\": () => (/* binding */ filterOption)\n/* harmony export */ });\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\n// Selectors\r\nconst todoInput = document.querySelector('.todo-input')\r\nconst todoButton = document.querySelector('.todo-button')\r\nconst todoList = document.querySelector('.todo-list')\r\nconst filterOption = document.querySelector('.filter-todo')\r\n\r\n// Event Listeners\r\ndocument.addEventListener('DOMContentLoaded', _storage_js__WEBPACK_IMPORTED_MODULE_1__.Storage.getTodos)\r\ntodoButton.addEventListener('click', _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.addTodo)\r\ntodoList.addEventListener('click', _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.deleteCheck)\r\nfilterOption.addEventListener('click', _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.filterTodo)\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n// class project\r\n// has properties name, tasks\r\n\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name\r\n        this.tasks = []\r\n    }\r\n\r\n    setTasks(tasks) {\r\n        this.tasks = tasks\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks\r\n    }\r\n\r\n    getTask(taskName) {\r\n        return this.tasks.find((task) => task.getName() === taskName);\r\n      }\r\n\r\n    contains(taskName) {\r\n        return this.tasks.some((task) => task.getName() === taskName);\r\n    }\r\n\r\n    addTask(task) {\r\n        if (this.tasks.indexOf(task) > 0) return;\r\n        this.tasks.push(task)\r\n    }\r\n\r\n    removeTask(task) {\r\n        let index = this.tasks.indexOf(task)\r\n        if (index > -1) {\r\n            this.tasks.splice(index, 1)\r\n        }\r\n    }\r\n\r\n    setName(name) {\r\n        this.name = name\r\n    }\r\n\r\n    getName(name) {\r\n        return this.name\r\n    }\r\n\r\n} \n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nclass Storage {\r\n\r\n    static getTodos() {\r\n        let todos\r\n        if (localStorage.getItem(\"todos\") === null) {\r\n            todos = []\r\n        }\r\n        else  {\r\n            todos = JSON.parse(localStorage.getItem(\"todos\"))\r\n        }\r\n    \r\n        todos.forEach(function(todo) {\r\n            // Todo Div\r\n            const todoDiv = document.createElement('div')\r\n            todoDiv.classList.add('todo')\r\n            // Create LI\r\n            const newTodo = document.createElement('li')\r\n            newTodo.innerText = todo\r\n            newTodo.classList.add('todo-item')\r\n            todoDiv.appendChild(newTodo)\r\n            // CHECK MARK BUTTON\r\n            const completedButton = document.createElement('button')\r\n            completedButton.innerHTML = '<i class=\"fas fa-check\"></i>'\r\n            completedButton.className = 'complete-btn'\r\n            todoDiv.appendChild(completedButton)\r\n            // TRASH BUTTON\r\n            const trashButton = document.createElement('button')\r\n            trashButton.innerHTML = '<i class=\"fas fa-trash\"></i>'\r\n            trashButton.className = 'trash-btn'\r\n            todoDiv.appendChild(trashButton)\r\n            // APPEND TO LIST\r\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.appendChild(todoDiv)\r\n        })\r\n    }\r\n\r\n    static saveLocalTodos(todo) {\r\n        // CHECK IF TODOS ARE ALREADY SAVED\r\n        let todos\r\n        if (localStorage.getItem(\"todos\") === null) {\r\n            todos = []\r\n        }\r\n        else  {\r\n            todos = JSON.parse(localStorage.getItem(\"todos\"))\r\n        }\r\n        todos.push(todo)\r\n        localStorage.setItem('todos', JSON.stringify(todos))\r\n    }\r\n\r\n    static removeLocalTodo(todo) {\r\n        let todos\r\n        if (localStorage.getItem(\"todos\") === null) {\r\n            todos = []\r\n        }\r\n        else  {\r\n            todos = JSON.parse(localStorage.getItem(\"todos\"))\r\n        }\r\n    \r\n        const toDoIndex = todos.indexOf(todo.children[0].innerText)\r\n        todos.splice(toDoIndex, 1)\r\n        localStorage.setItem('todos', JSON.stringify(todos))\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n// to do items class\r\n// has properties category, description, dueDate, priority, \r\n\r\nclass Todo {\r\n    constructor(category, description, dueDate, priority) {\r\n        this.category = category\r\n        this.description = description\r\n        this.dueDate = dueDate\r\n        this.priority = priority\r\n    }\r\n\r\n    setCategory(category) {\r\n        this.category = category\r\n    }\r\n    \r\n    setDescription(description) {\r\n        this.description = description\r\n    }\r\n    \r\n    setDueDate(dueDate) {\r\n        this.dueDate = dueDate\r\n    }\r\n    \r\n    setPriority(priority) {\r\n        this.priority = priority\r\n    }\r\n\r\n    getCategory() {\r\n        return this.category\r\n    }\r\n\r\n    getDescription() {\r\n        return this.description\r\n    }\r\n\r\n    getDueDate() {\r\n        return this.dueDate\r\n    }\r\n\r\n    getPriority() {\r\n        return this.priority\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;