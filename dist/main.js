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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\nlet tasksDiv = document.getElementById('tasks-div')\r\nlet addTaskBtn = document.getElementById('button-add-task')\r\nlet addTaskContainer = document.createElement('div')\r\n\r\nclass UI {\r\n    \r\n    static loadHomepage() {\r\n        UI.addListeners()\r\n    }\r\n\r\n    static addListeners() {\r\n        /*let addTaskBtn = document.getElementById('button-add-task')*/\r\n        let addProjectBtn = document.getElementById('button-add-project')\r\n\r\n        addTaskBtn.addEventListener('click', UI.displayAddTaskContainer)\r\n        addProjectBtn.addEventListener('click', UI.addProject)\r\n\r\n    }\r\n\r\n\r\n    static displayAddTaskContainer() {\r\n\r\n        addTaskBtn.style.display = 'none'\r\n        tasksDiv.appendChild(addTaskContainer)\r\n        addTaskContainer.innerHTML = `\r\n        <form id='addTaskForm'>\r\n            <label for=\"inputTask\">Task:</label><br>\r\n            <input type=\"text\" id=\"inputTask\" name=\"inputTask\"><br>\r\n            <label for=\"inputDueDate\">Due Date:</label><br>\r\n            <input type=\"text\" id=\"inputDueDate\" name=\"inputDueDate\">\r\n        </form>\r\n        <button class='taskContainerBtns' id='taskContainerAddBtn'>Add</button>\r\n        <button class='taskContainerBtns' id='taskContainerCancelBtn'>Cancel</button>\r\n        `\r\n    \r\n        UI.styleTaskContainer()\r\n    }\r\n\r\n    static styleTaskContainer() {\r\n        addTaskContainer.style.order = '1'\r\n    \r\n        let taskContainerAddBtn = document.getElementById('taskContainerAddBtn')\r\n        let taskContainerCancelBtn= document.getElementById('taskContainerCancelBtn')\r\n        taskContainerAddBtn.style.display = 'inline-block'\r\n        taskContainerCancelBtn.style.display = 'inline-block'\r\n     \r\n    }\r\n\r\n    static addProject() {\r\n\r\n    }\r\n\r\n\r\n    static removeAddTaskBtn() {\r\n        let addTaskBtn = document.getElementById('button-add-task')\r\n        addTaskBtn.style.display = 'none !important'\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\r\n\r\n_UI_js__WEBPACK_IMPORTED_MODULE_0__.UI.loadHomepage()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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