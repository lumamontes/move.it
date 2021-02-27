webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_luma_www_nlw4_moveit_next_moveit2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ \"./src/components/LevelUpModal.tsx\");\n\n\n\nvar _jsxFileName = \"/home/luma/www/nlw4/moveit-next/moveit2/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var _rest$level, _rest$currentExperien, _rest$challengesCompl;\n\n  var children = _ref.children,\n      rest = Object(_home_luma_www_nlw4_moveit_next_moveit2_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),\n      currentExperience = _useState2[0],\n      setCurrentExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isLevelUpModalOpen = _useState5[0],\n      setIsLevelUpModalOpen = _useState5[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2); // O use effect com o segundo parametro com um array vazio significa que essa função\n  //vai acontecer somente uma vez, quando esse componente for carregado em tela\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []); //yarn add js-cookie\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengesCompleted));\n  }, [level, currentExperience, challengesCompleted]);\n\n  function levelUp() {\n    setLevel(level + 1);\n    setIsLevelUpModalOpen(true);\n  }\n\n  function closeLevelUpModal() {\n    setIsLevelUpModalOpen(false);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n    new Audio('/notification.mp3').play();\n\n    if (Notification.permission === 'granted') {\n      new Notification('Novo desafio 😤'), {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      };\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    var amount = activeChallenge.amount;\n    var finalExperience = currentExperience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentExperience(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      challengesCompleted: challengesCompleted,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      completeChallenge: completeChallenge,\n      experienceToNextLevel: experienceToNextLevel,\n      closeLevelUpModal: closeLevelUpModal\n    },\n    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__[\"LevelUpModal\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 32\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 108,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengesProvider, \"W5NLIqaAU2jtSdzRQBAZUgfGEWY=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImlzTGV2ZWxVcE1vZGFsT3BlbiIsInNldElzTGV2ZWxVcE1vZGFsT3BlbiIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJTdHJpbmciLCJsZXZlbFVwIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE2Qk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFFQSxTQUFTQyxrQkFBVCxPQUM2QjtBQUFBOztBQUFBOztBQUFBLE1BRENDLFFBQ0QsUUFEQ0EsUUFDRDtBQUFBLE1BQWpDQyxJQUFpQzs7QUFBQSxrQkFDTkMsc0RB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Q0FGLDBCQUFzQixDQUFDRCxtQkFBbUIsR0FBRSxDQUF0QixDQUF0QjtBQUNIOztBQUVELHNCQUNJLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0EsU0FBSyxFQUFFO0FBQ0hKLFdBQUssRUFBTEEsS0FERztBQUVIRSx1QkFBaUIsRUFBakJBLGlCQUZHO0FBR0hFLHlCQUFtQixFQUFuQkEsbUJBSEc7QUFJSGUsYUFBTyxFQUFQQSxPQUpHO0FBS0hFLHVCQUFpQixFQUFqQkEsaUJBTEc7QUFNSGYscUJBQWUsRUFBZkEsZUFORztBQU9IMkIsb0JBQWMsRUFBZEEsY0FQRztBQVFIQyx1QkFBaUIsRUFBakJBLGlCQVJHO0FBU0h4QiwyQkFBcUIsRUFBckJBLHFCQVRHO0FBVUhVLHVCQUFpQixFQUFqQkE7QUFWRyxLQURQO0FBQUEsZUFhS3ZCLFFBYkwsRUFjQ1csa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0dBM0ZlWixrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCAgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsJztcblxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XG4gICAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YSB7XG4gICAgbGV2ZWw6IG51bWJlcjtcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbiAgICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICAgIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xufVxuXG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgICBsZXZlbDogbnVtYmVyO1xuICAgIGN1cnJlbnRFeHBlcmllbmNlOiAgbnVtYmVyO1xuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6ICBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyICh7Y2hpbGRyZW4sXG4uLi5yZXN0fSA6IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEgKTtcbiAgICBjb25zdCBbIGN1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShyZXN0LmN1cnJlbnRFeHBlcmllbmNlID8/IDApXG4gICAgY29uc3QgWyBjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwKVxuXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxICkqIDQsIDIpXG5cbiAgICAvLyBPIHVzZSBlZmZlY3QgY29tIG8gc2VndW5kbyBwYXJhbWV0cm8gY29tIHVtIGFycmF5IHZhemlvIHNpZ25pZmljYSBxdWUgZXNzYSBmdW7Dp8Ojb1xuICAgIC8vdmFpIGFjb250ZWNlciBzb21lbnRlIHVtYSB2ZXosIHF1YW5kbyBlc3NlIGNvbXBvbmVudGUgZm9yIGNhcnJlZ2FkbyBlbSB0ZWxhXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgfSwgW10pXG5cbiAgICAvL3lhcm4gYWRkIGpzLWNvb2tpZVxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICBDb29raWVzLnNldCgnbGV2ZWwnLCBTdHJpbmcobGV2ZWwpKTtcbiAgICAgICAgQ29va2llcy5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcbiAgICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLGNoYWxsZW5nZXNDb21wbGV0ZWRdKVxuXG5cbiAgICBmdW5jdGlvbiBsZXZlbFVwICgpIHtcbiAgICAgICAgc2V0TGV2ZWwobGV2ZWwgKzEpXG4gICAgICAgIHNldElzTGV2ZWxVcE1vZGFsT3Blbih0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsICgpIHtcbiAgICAgICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKVxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XVxuXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpXG5cbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcblxuICAgICAgICBpZihOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0nZ3JhbnRlZCcpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbyDwn5ikJykse1xuICAgICAgICAgICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcbiAgICAgICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xuXG4gICAgICAgIGlmKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcbiAgICAgICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgICAgICAgIGxldmVsVXAoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKzEpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciBcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgIGxldmVsLCBcbiAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLCBcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXG4gICAgICAgICAgICBsZXZlbFVwLFxuICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXG4gICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgICAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWwsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxuICAgICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})