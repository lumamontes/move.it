webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/luma/www/nlw4/moveit-next/moveit2/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentExperience = _useState2[0],\n      setCurrentExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2); // O use effect com o segundo parametro com um array vazio significa que essa função\n  //vai acontecer somente uma vez, quando esse componente for carregado em tela\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []); //yarn add js-cookie\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('level', String(level));\n    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('currentExperience', String(currentExperience));\n    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('challengesCompleted', String(challengesCompleted));\n  }, [level, currentExperience, challengesCompleted]);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n    new Audio('/notification.mp3').play();\n\n    if (Notification.permission === 'granted') {\n      new Notification('Novo desafio 😤'), {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      };\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    var amount = activeChallenge.amount;\n    var finalExperience = currentExperience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentExperience(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      challengesCompleted: challengesCompleted,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      completeChallenge: completeChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengesProvider, \"SU62DPDH15hjVZuesxhk1afGLfw=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiQ29va2llcyIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBNEJPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FBbUU7QUFBQTs7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDOztBQUFBLGtCQUM1Q0Msc0RBQVEsQ0FBQyxDQUFELENBRG9DO0FBQUEsTUFDL0RDLEtBRCtEO0FBQUEsTUFDeERDLFFBRHdEOztBQUFBLG1CQUVuQkYsc0RBQVEsQ0FBQyxDQUFELENBRlc7QUFBQSxNQUU5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TDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBakZlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCAgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gICAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gICAgbGV2ZWw6IG51bWJlcjtcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xufVxuXG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgICBsZXZlbDogbnVtYmVyO1xuICAgIGN1cnJlbnRFeHBlcmllbmNlOiAgbnVtYmVyO1xuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6ICBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyICh7Y2hpbGRyZW59IDogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFsgY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgWyBjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbClcbiAgICBcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxICkqIDQsIDIpXG5cbiAgICAvLyBPIHVzZSBlZmZlY3QgY29tIG8gc2VndW5kbyBwYXJhbWV0cm8gY29tIHVtIGFycmF5IHZhemlvIHNpZ25pZmljYSBxdWUgZXNzYSBmdW7Dp8Ojb1xuICAgIC8vdmFpIGFjb250ZWNlciBzb21lbnRlIHVtYSB2ZXosIHF1YW5kbyBlc3NlIGNvbXBvbmVudGUgZm9yIGNhcnJlZ2FkbyBlbSB0ZWxhXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgfSwgW10pXG5cbiAgICAvL3lhcm4gYWRkIGpzLWNvb2tpZVxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcbiAgICAgICAgQ29va2llcy5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcbiAgICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLGNoYWxsZW5nZXNDb21wbGV0ZWRdKVxuXG5cbiAgICBmdW5jdGlvbiBsZXZlbFVwICgpIHtcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKzEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdXG5cbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSlcblxuICAgICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xuXG4gICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSdncmFudGVkJykge1xuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvIPCfmKQnKSx7XG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcbiAgICAgICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XG5cbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xuICAgICAgICAgICAgbGV2ZWxVcCgpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gICAgICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgbGV2ZWwsIFxuICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsIFxuICAgICAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcbiAgICAgICAgICAgIGxldmVsVXAsXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXG4gICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})