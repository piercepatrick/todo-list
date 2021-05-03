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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\nlet tasksDiv = document.getElementById('tasks-div')\r\nlet addTaskBtn = document.getElementById('button-add-task')\r\nlet addTaskContainer = document.createElement('div')\r\nlet addProjectBtn = document.getElementById('button-add-project')\r\n\r\nclass UI {\r\n    \r\n    static loadHomepage() {\r\n        UI.addListeners()\r\n    }\r\n\r\n    static addListeners() {\r\n        addTaskBtn.addEventListener('click', UI.displayAddTaskContainer)\r\n        addProjectBtn.addEventListener('click', UI.addProject)\r\n\r\n    }\r\n\r\n\r\n    static displayAddTaskContainer() {\r\n        addTaskBtn.style.display = 'none'\r\n        tasksDiv.appendChild(addTaskContainer)\r\n        addTaskContainer.innerHTML = `\r\n        <form action=''>\r\n            <label for=\"inputCategory\" >Category:</label><br>\r\n            <input type=\"text\" id=\"inputCategory\" name=\"inputCategory\"><br>\r\n            <label for=\"inputTask\" >Task:</label><br>\r\n            <textarea name=\"textarea\" id='inputTask'></textarea><br>\r\n            <label for=\"inputDueDate\" >Due Date:</label><br>\r\n            <input type=\"date\" id=\"inputDueDate\" name=\"inputDueDate\"><br>\r\n            <label for=\"inputPriority\" >Priority:</label><br>\r\n            <select name=\"inputPriority\" id=\"inputPriority\">\r\n                <option value=\"High\">High</option>\r\n                <option value=\"Medium\">Medium</option>\r\n                <option value=\"Low\">Low</option>\r\n            </select> <br>\r\n            <input type='submit' value='Submit' class='taskContainerBtns' id='taskContainerAddBtn'>\r\n            <input type='button' value='Cancel' class='taskContainerBtns' id='taskContainerCancelBtn'>\r\n        </form>\r\n        `\r\n        \r\n        UI.styleTaskContainer()\r\n    }\r\n\r\n    static styleTaskContainer() {\r\n        addTaskContainer.style.order = '1'      \r\n\r\n        let taskContainerAddBtn = document.getElementById('taskContainerAddBtn')\r\n        let taskContainerCancelBtn= document.getElementById('taskContainerCancelBtn')\r\n        taskContainerAddBtn.style.display = 'inline-block'\r\n        taskContainerCancelBtn.style.display = 'inline-block'\r\n        \r\n        taskContainerAddBtn.addEventListener('click', UI.addTaskToBoard)\r\n        \r\n        \r\n    \r\n    }\r\n\r\n    static addTaskToBoard(e) {\r\n        //e.preventDefault()\r\n        let taskCategory = document.getElementById('inputCategory')\r\n        let taskDecription = document.getElementById('inputTask')\r\n        let taskDueDate = document.getElementById('inputDueDate')\r\n        let taskPriority = document.getElementById('inputPriority')\r\n        let task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(taskCategory, taskDecription, taskDueDate, taskPriority)\r\n        \r\n    }\r\n\r\n    static removeAddTaskContainer() {\r\n        addTaskContainer.style.display = 'none'\r\n\r\n    }\r\n\r\n    static addProject() {\r\n\r\n    }\r\n\r\n    static showAddTaskBtn() {\r\n        addTaskBtn.style.display = 'block'\r\n    }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\r\n\r\n_UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.loadHomepage()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n// to do items class\r\n// has properties category, description, dueDate, priority, \r\n\r\nclass Task {\r\n    constructor(category, description, dueDate, priority) {\r\n        this.category = category\r\n        this.description = description\r\n        this.dueDate = dueDate\r\n        this.priority = priority\r\n    }\r\n\r\n    setCategory(category) {\r\n        this.category = category\r\n    }\r\n    \r\n    setDescription(description) {\r\n        this.description = description\r\n    }\r\n    \r\n    setDueDate(dueDate) {\r\n        this.dueDate = dueDate\r\n    }\r\n    \r\n    setPriority(priority) {\r\n        this.priority = priority\r\n    }\r\n\r\n    getCategory() {\r\n        return this.category\r\n    }\r\n\r\n    getDescription() {\r\n        return this.description\r\n    }\r\n\r\n    getDueDate() {\r\n        return this.dueDate\r\n    }\r\n\r\n    getPriority() {\r\n        return this.priority\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;