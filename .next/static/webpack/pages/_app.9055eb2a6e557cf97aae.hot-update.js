webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\n\nvar _jsxFileName = \"/home/luma/www/nlw4/moveit-next/moveit2/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentExperience = _useState2[0],\n      setCurrentExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2); // O use effect com o segundo parametro com um array vazio significa que essa função\n  //vai acontecer somente uma vez, quando esse componente for carregado em tela\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n\n    if (Notification.permission === 'granted') {\n      new Notification('Novo desafio 😤'), {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      };\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    var amount = activeChallenge.amount;\n    var finalExperience = currentExperience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentExperience(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      challengesCompleted: challengesCompleted,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      completeChallenge: completeChallenge,\n      experienceToNextLevel: experienceToNextLevel\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChallengesProvider, \"jaDyrTTtCggk7qHy1rGyspsiy7g=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZ2VzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsInVzZUVmZmVjdCIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQXlCTyxJQUFNQSxpQkFBaUIsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF2QztBQUVBLFNBQVNDLGtCQUFULE9BQW1FO0FBQUE7O0FBQUEsTUFBckNDLFFBQXFDLFFBQXJDQSxRQUFxQzs7QUFBQSxrQkFDNUNDLHNEQUFRLENBQUMsQ0FBRCxDQURvQztBQUFBLE1BQy9EQyxLQUQrRDtBQUFBLE1BQ3hEQyxRQUR3RDs7QUFBQSxtQkFFbkJGLHNEQUFRLENBQUMsQ0FBRCxDQUZXO0FBQUEsTUFFOURHLGlCQUY4RDtBQUFBLE1BRTNDQyxvQkFGMkM7O0FBQUEsbUJBR2ZKLHNEQUFRLENBQUMsQ0FBRCxDQUhPO0FBQUEsTUFHOURLLG1CQUg4RDtBQUFBLE1BR3pDQyxzQkFIeUM7O0FBQUEsbUJBS3hCTixzREFBUSxDQUFDLElBQUQsQ0FMZ0I7QUFBQSxNQUsvRE8sZUFMK0Q7QUFBQSxNQUs5Q0Msa0JBTDhDOztBQU90RSxNQUFNQyxxQkFBcUIsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQ1YsS0FBSyxHQUFHLENBQVQsSUFBYyxDQUF2QixFQUEwQixDQUExQixDQUE5QixDQVBzRSxDQVN0RTtBQUNBOztBQUNBVyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0JBQVksQ0FBQ0MsaUJBQWI7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUtBLFdBQVNDLE9BQVQsR0FBb0I7QUFDaEJiLFlBQVEsQ0FBQ0QsS0FBSyxHQUFFLENBQVIsQ0FBUjtBQUNIOztBQUVELFdBQVNlLGlCQUFULEdBQTZCO0FBQ3pCLFFBQU1DLG9CQUFvQixHQUFHUCxJQUFJLENBQUNRLEtBQUwsQ0FBV1IsSUFBSSxDQUFDUyxNQUFMLEtBQWdCQyw2Q0FBVSxDQUFDQyxNQUF0QyxDQUE3QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0YsNkNBQVUsQ0FBQ0gsb0JBQUQsQ0FBNUI7QUFFQVQsc0JBQWtCLENBQUNjLFNBQUQsQ0FBbEI7O0FBRUEsUUFBR1QsWUFBWSxDQUFDVSxVQUFiLEtBQTJCLFNBQTlCLEVBQXlDO0FBQ3JDLFVBQUlWLFlBQUosQ0FBaUIsaUJBQWpCLEdBQW9DO0FBQ2hDVyxZQUFJLG9CQUFhRixTQUFTLENBQUNHLE1BQXZCO0FBRDRCLE9BQXBDO0FBR0g7QUFDSjs7QUFFRCxXQUFTQyxjQUFULEdBQTBCO0FBQ3RCbEIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNIOztBQUVELFdBQVNtQixpQkFBVCxHQUE2QjtBQUN6QixRQUFHLENBQUNwQixlQUFKLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBSHdCLFFBS2pCa0IsTUFMaUIsR0FLTmxCLGVBTE0sQ0FLakJrQixNQUxpQjtBQU16QixRQUFJRyxlQUFlLEdBQUd6QixpQkFBaUIsR0FBR3NCLE1BQTFDOztBQUVBLFFBQUdHLGVBQWUsSUFBSW5CLHFCQUF0QixFQUE2QztBQUN6Q21CLHFCQUFlLEdBQUdBLGVBQWUsR0FBR25CLHFCQUFwQztBQUNBTSxhQUFPO0FBQ1Y7O0FBRURYLHdCQUFvQixDQUFDd0IsZUFBRCxDQUFwQjtBQUNBcEIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUUsQ0FBdEIsQ0FBdEI7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNBLFNBQUssRUFBRTtBQUNISixXQUFLLEVBQUxBLEtBREc7QUFFSEUsdUJBQWlCLEVBQWpCQSxpQkFGRztBQUdIRSx5QkFBbUIsRUFBbkJBLG1CQUhHO0FBSUhVLGFBQU8sRUFBUEEsT0FKRztBQUtIQyx1QkFBaUIsRUFBakJBLGlCQUxHO0FBTUhULHFCQUFlLEVBQWZBLGVBTkc7QUFPSG1CLG9CQUFjLEVBQWRBLGNBUEc7QUFRSEMsdUJBQWlCLEVBQWpCQSxpQkFSRztBQVNIbEIsMkJBQXFCLEVBQXJCQTtBQVRHLEtBRFA7QUFBQSxjQVlLVjtBQVpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7R0F4RWVELGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0ICB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XG5cbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xuICAgIGxldmVsOiBudW1iZXI7XG4gICAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcbiAgICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcbn1cblxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlc0NvbnRleHREYXRhKVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyICh7Y2hpbGRyZW59IDogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFsgY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgWyBjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApXG5cbiAgICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbClcbiAgICBcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxICkqIDQsIDIpXG5cbiAgICAvLyBPIHVzZSBlZmZlY3QgY29tIG8gc2VndW5kbyBwYXJhbWV0cm8gY29tIHVtIGFycmF5IHZhemlvIHNpZ25pZmljYSBxdWUgZXNzYSBmdW7Dp8Ojb1xuICAgIC8vdmFpIGFjb250ZWNlciBzb21lbnRlIHVtYSB2ZXosIHF1YW5kbyBlc3NlIGNvbXBvbmVudGUgZm9yIGNhcnJlZ2FkbyBlbSB0ZWxhXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgfSwgW10pXG5cblxuICAgIGZ1bmN0aW9uIGxldmVsVXAgKCkge1xuICAgICAgICBzZXRMZXZlbChsZXZlbCArMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aClcbiAgICAgICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF1cblxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKVxuXG4gICAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSdncmFudGVkJykge1xuICAgICAgICAgICAgbmV3IE5vdGlmaWNhdGlvbignTm92byBkZXNhZmlvIPCfmKQnKSx7XG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcbiAgICAgICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XG5cbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xuICAgICAgICAgICAgbGV2ZWxVcCgpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gICAgICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgbGV2ZWwsIFxuICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsIFxuICAgICAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcbiAgICAgICAgICAgIGxldmVsVXAsXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcbiAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxuICAgICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXG4gICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})