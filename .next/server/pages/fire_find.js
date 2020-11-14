module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/fire_find.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Firefind.js":
/*!********************************!*\
  !*** ./components/Firefind.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/ikedahikaritarou/Desktop/APP/next-react/components/Firefind.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Firefind extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  //初期化。ステートとイベント用メソッドの設定\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"style\", {\n      borderBottom: \"1px solid gray\"\n    });\n\n    this.state = {\n      input: '',\n      data: []\n    };\n    this.doChange = this.doChange.bind(this);\n    this.doAction = this.doAction.bind(this);\n  } //入力フィールドの処理\n\n\n  doChange(e) {\n    this.setState({\n      input: e.target.value\n    });\n  } //ボタンクリック時の処理\n\n\n  doAction(e) {\n    this.findFireData(this.state.input);\n  } //検索実行の処理\n\n\n  findFireData(s) {\n    let db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.database();\n    let ref = db.ref('sample/');\n    let self = this;\n    ref.orderByKey().equalTo(s).on('value', snapshot => {\n      self.setState({\n        data: snapshot.val()\n      });\n    });\n  } //テーブル内容の作成\n\n\n  getTableData() {\n    let result = [];\n\n    if (this.state.data == null || this.state.data.length == 0) {\n      return [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: \"NO DATA.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 27\n        }, this)\n      }, \"0\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }, this)];\n    }\n\n    for (let i in this.state.data) {\n      result.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: this.state.data[i].ID\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: this.state.data[i].name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n          children: this.state.data[i].message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 9\n        }, this)]\n      }, i, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 19\n      }, this));\n    }\n\n    return result;\n  } //レンダリング\n\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        onChange: this.doChange,\n        style: this.style,\n        value: this.state.input\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: this.doAction,\n        children: \"Find\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n          children: this.getTableData()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 14\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Firefind);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmVmaW5kLmpzPzA4YmIiXSwibmFtZXMiOlsiRmlyZWZpbmQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYm9yZGVyQm90dG9tIiwic3RhdGUiLCJpbnB1dCIsImRhdGEiLCJkb0NoYW5nZSIsImJpbmQiLCJkb0FjdGlvbiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmluZEZpcmVEYXRhIiwicyIsImRiIiwiZmlyZWJhc2UiLCJkYXRhYmFzZSIsInJlZiIsInNlbGYiLCJvcmRlckJ5S2V5IiwiZXF1YWxUbyIsIm9uIiwic25hcHNob3QiLCJ2YWwiLCJnZXRUYWJsZURhdGEiLCJyZXN1bHQiLCJsZW5ndGgiLCJpIiwicHVzaCIsIklEIiwibmFtZSIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsK0NBQXZCLENBQWlDO0FBSy9CO0FBQ0FDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLG1DQUxYO0FBQ05DLGtCQUFZLEVBQUM7QUFEUCxLQUtXOztBQUVqQixTQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFDLEVBREs7QUFFWEMsVUFBSSxFQUFDO0FBRk0sS0FBYjtBQUlBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNELElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDRCxHQWQ4QixDQWdCL0I7OztBQUNBRCxVQUFRLENBQUNHLENBQUQsRUFBSTtBQUNWLFNBQUtDLFFBQUwsQ0FBYztBQUNaTixXQUFLLEVBQUNLLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQURILEtBQWQ7QUFHRCxHQXJCOEIsQ0F1Qi9COzs7QUFDQUosVUFBUSxDQUFDQyxDQUFELEVBQUk7QUFDVixTQUFLSSxZQUFMLENBQWtCLEtBQUtWLEtBQUwsQ0FBV0MsS0FBN0I7QUFDRCxHQTFCOEIsQ0E0Qi9COzs7QUFDQVMsY0FBWSxDQUFDQyxDQUFELEVBQUk7QUFDZCxRQUFJQyxFQUFFLEdBQUdDLCtDQUFRLENBQUNDLFFBQVQsRUFBVDtBQUNBLFFBQUlDLEdBQUcsR0FBR0gsRUFBRSxDQUFDRyxHQUFILENBQU8sU0FBUCxDQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUQsT0FBRyxDQUFDRSxVQUFKLEdBQ0NDLE9BREQsQ0FDU1AsQ0FEVCxFQUVDUSxFQUZELENBRUksT0FGSixFQUVjQyxRQUFELElBQWE7QUFDeEJKLFVBQUksQ0FBQ1QsUUFBTCxDQUFjO0FBQ1pMLFlBQUksRUFBQ2tCLFFBQVEsQ0FBQ0MsR0FBVDtBQURPLE9BQWQ7QUFHRCxLQU5EO0FBT0QsR0F4QzhCLENBMEMvQjs7O0FBQ0FDLGNBQVksR0FBRTtBQUNaLFFBQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLFFBQUksS0FBS3ZCLEtBQUwsQ0FBV0UsSUFBWCxJQUFtQixJQUFuQixJQUEyQixLQUFLRixLQUFMLENBQVdFLElBQVgsQ0FBZ0JzQixNQUFoQixJQUEwQixDQUF6RCxFQUE0RDtBQUMxRCxhQUFPLGNBQUM7QUFBQSwrQkFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaLFNBQVEsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUQsQ0FBUDtBQUNEOztBQUNELFNBQUksSUFBSUMsQ0FBUixJQUFhLEtBQUt6QixLQUFMLENBQVdFLElBQXhCLEVBQThCO0FBQzVCcUIsWUFBTSxDQUFDRyxJQUFQLGVBQVk7QUFBQSxnQ0FDVjtBQUFBLG9CQUFLLEtBQUsxQixLQUFMLENBQVdFLElBQVgsQ0FBZ0J1QixDQUFoQixFQUFtQkU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVSxlQUVWO0FBQUEsb0JBQUssS0FBSzNCLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQnVCLENBQWhCLEVBQW1CRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZVLGVBR1Y7QUFBQSxvQkFBSyxLQUFLNUIsS0FBTCxDQUFXRSxJQUFYLENBQWdCdUIsQ0FBaEIsRUFBbUJJO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSFU7QUFBQSxTQUFTSixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBWjtBQUtEOztBQUNELFdBQU9GLE1BQVA7QUFDRCxHQXhEOEIsQ0EwRC9COzs7QUFDQU8sUUFBTSxHQUFHO0FBQ1Asd0JBQVE7QUFBQSw4QkFDTjtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUUsS0FBSzNCLFFBQWxDO0FBQ0EsYUFBSyxFQUFFLEtBQUs0QixLQURaO0FBQ21CLGFBQUssRUFBRSxLQUFLL0IsS0FBTCxDQUFXQztBQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE0sZUFHTjtBQUFRLGVBQU8sRUFBRSxLQUFLSSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhNLGVBSU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpNLGVBS047QUFBQSwrQkFBTztBQUFBLG9CQUNKLEtBQUtpQixZQUFMO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQVNEOztBQXJFOEI7O0FBd0VsQjNCLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaXJlZmluZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNsYXNzIEZpcmVmaW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3R5bGUgPSB7XG4gICAgYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkIGdyYXlcIlxuICB9XG5cbiAgLy/liJ3mnJ/ljJbjgILjgrnjg4bjg7zjg4jjgajjgqTjg5njg7Pjg4jnlKjjg6Hjgr3jg4Pjg4njga7oqK3lrppcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OicnLFxuICAgICAgZGF0YTpbXVxuICAgIH1cbiAgICB0aGlzLmRvQ2hhbmdlID0gdGhpcy5kb0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICAvL+WFpeWKm+ODleOCo+ODvOODq+ODieOBruWHpueQhlxuICBkb0NoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDplLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICAvL+ODnOOCv+ODs+OCr+ODquODg+OCr+aZguOBruWHpueQhlxuICBkb0FjdGlvbihlKSB7XG4gICAgdGhpcy5maW5kRmlyZURhdGEodGhpcy5zdGF0ZS5pbnB1dCk7XG4gIH1cblxuICAvL+aknOe0ouWun+ihjOOBruWHpueQhlxuICBmaW5kRmlyZURhdGEocykge1xuICAgIGxldCBkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG4gICAgbGV0IHJlZiA9IGRiLnJlZignc2FtcGxlLycpO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICByZWYub3JkZXJCeUtleSgpXG4gICAgLmVxdWFsVG8ocylcbiAgICAub24oJ3ZhbHVlJywgKHNuYXBzaG90KT0+IHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOnNuYXBzaG90LnZhbCgpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8v44OG44O844OW44Or5YaF5a6544Gu5L2c5oiQXG4gIGdldFRhYmxlRGF0YSgpe1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBpZiAodGhpcy5zdGF0ZS5kYXRhID09IG51bGwgfHwgdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm4gWzx0ciBrZXk9XCIwXCI+PHRoPk5PIERBVEEuPC90aD48L3RyPl07XG4gICAgfVxuICAgIGZvcihsZXQgaSBpbiB0aGlzLnN0YXRlLmRhdGEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKDx0ciBrZXk9e2l9PlxuICAgICAgICA8dGg+e3RoaXMuc3RhdGUuZGF0YVtpXS5JRH08L3RoPlxuICAgICAgICA8dGg+e3RoaXMuc3RhdGUuZGF0YVtpXS5uYW1lfTwvdGg+XG4gICAgICAgIDx0aD57dGhpcy5zdGF0ZS5kYXRhW2ldLm1lc3NhZ2V9PC90aD5cbiAgICAgIDwvdHI+KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8v44Os44Oz44OA44Oq44Oz44KwXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5kb0NoYW5nZX1cbiAgICAgIHN0eWxlPXt0aGlzLnN0eWxlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dH0gLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5kb0FjdGlvbn0+RmluZDwvYnV0dG9uPlxuICAgICAgPGhyIC8+XG4gICAgICA8dGFibGU+PHRib2R5PlxuICAgICAgICB7dGhpcy5nZXRUYWJsZURhdGEoKX1cbiAgICAgIDwvdGJvZHk+PC90YWJsZT5cbiAgICA8L2Rpdj4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlyZWZpbmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Firefind.js\n");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/ikedahikaritarou/Desktop/APP/next-react/components/Footer.js\";\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: this.props.footer\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsK0NBQXJCLENBQStCO0FBRTdCQyxRQUFNLEdBQUc7QUFDUCx3QkFBUTtBQUFBLDZCQUNOO0FBQUEsa0JBQU0sS0FBS0MsS0FBTCxDQUFXQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFSO0FBR0Q7O0FBTjRCOztBQVFoQkoscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPGZvb3Rlcj5cbiAgICAgIDxkaXY+e3RoaXMucHJvcHMuZm9vdGVyfTwvZGl2PlxuICAgIDwvZm9vdGVyPik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/ikedahikaritarou/Desktop/APP/next-react/components/Header.js\";\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: this.props.header\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwiaGVhZGVyIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQywrQ0FBckIsQ0FBK0I7QUFFN0JDLFFBQU0sR0FBRztBQUNQLHdCQUFRO0FBQUEsOEJBQ047QUFBQSxrQkFBTSxLQUFLQyxLQUFMLENBQVdDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETSxlQUVOO0FBQUEsa0JBQUssS0FBS0QsS0FBTCxDQUFXRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVI7QUFJRDs7QUFQNEI7O0FBU2hCTCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8aGVhZGVyPlxuICAgICAgPGRpdj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9kaXY+XG4gICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cbiAgICA8L2hlYWRlcj4pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/Style */ \"./static/Style.js\");\n\nvar _jsxFileName = \"/Users/ikedahikaritarou/Desktop/APP/next-react/components/Layout.js\";\n\n\n\n\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: this.props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          charSet: \"utf-8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"viewport\",\n          content: \"initial-scale=1.0, width=device-width\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 7\n      }, this), _static_Style__WEBPACK_IMPORTED_MODULE_5__[\"default\"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        header: this.props.header,\n        title: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, this), this.props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        footer: this.props.footer\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJzdHlsZSIsImhlYWRlciIsImNoaWxkcmVuIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLCtDQUFyQixDQUErQjtBQUU3QkMsUUFBTSxHQUFHO0FBQ1Asd0JBQVE7QUFBQSw4QkFDTixxRUFBQyxnREFBRDtBQUFBLGdDQUNGO0FBQUEsb0JBQVEsS0FBS0MsS0FBTCxDQUFXQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURFLGVBRUY7QUFBTSxpQkFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRSxlQUdGO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFDRSxpQkFBTyxFQUFDO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETSxFQU9MQyxxREFQSyxlQVFOLHFFQUFDLDBEQUFEO0FBQVEsY0FBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csTUFBM0I7QUFDRSxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXQztBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUk0sRUFXTCxLQUFLRCxLQUFMLENBQVdJLFFBWE4sZUFZTixxRUFBQywwREFBRDtBQUFRLGNBQU0sRUFBRSxLQUFLSixLQUFMLENBQVdLO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQWNEOztBQWpCNEI7O0FBb0JoQlIscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdGF0aWMvU3R5bGUnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCdcbiAgICAgIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7c3R5bGV9XG4gICAgICA8SGVhZGVyIGhlYWRlcj17dGhpcy5wcm9wcy5oZWFkZXJ9XG4gICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSAvPlxuICAgICAgICB7LyogdGhpcy5wcm9wcy5jaGlsZHJlbuOBjGluZGV4Lmpz44GL44KJPExheW91dD7jgrPjg7Pjg4bjg7Pjg4TlhoXlrrk8L0xheW91dD7jgpLlj5blvpfjgZfjgabooajnpLrjgZfjgabjgYTjgosgKi99XG4gICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxGb290ZXIgZm9vdGVyPXt0aGlzLnByb3BzLmZvb3Rlcn0vPlxuICAgIDwvZGl2Pik7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/fire_find.js":
/*!****************************!*\
  !*** ./pages/fire_find.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Firefind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Firefind */ \"./components/Firefind.js\");\n\nvar _jsxFileName = \"/Users/ikedahikaritarou/Desktop/APP/next-react/pages/fire_find.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  header: \"Fire\",\n  title: \"Sample data.\",\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Firefind__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maXJlX2ZpbmQuanM/ZjViNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVlLGtGQUNiLHFFQUFDLDBEQUFEO0FBQVEsUUFBTSxFQUFDLE1BQWY7QUFBc0IsT0FBSyxFQUFDLGNBQTVCO0FBQUEseUJBQ0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERiIsImZpbGUiOiIuL3BhZ2VzL2ZpcmVfZmluZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEZpcmVmaW5kIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWZpbmQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PihcbiAgPExheW91dCBoZWFkZXI9XCJGaXJlXCIgdGl0bGU9XCJTYW1wbGUgZGF0YS5cIj5cbiAgICA8RmlyZWZpbmQgLz5cbiAgPC9MYXlvdXQ+XG4pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/fire_find.js\n");

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/ikedahikaritarou/Desktop/APP/next-react/static/Style.js\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n  children: `\n  body {\n    margin:10px;\n    padding:5px;\n    color:#669;\n  }\n  header {\n    font-size:64pt;\n    font-weight:bold;\n    text-align:right;\n    letter-spacing:-8px;\n    color:#ddddff;\n    margin:-32px 5px;\n  }\n  footer {\n    color:#99c;\n    font-size:12pt;\n    text-align:right;\n    boeder-bottom:1px solid #99c;\n    margin:50px 0px 10px 0px;\n    position: relative;\n    bottom: 10px;\n    right: 10px;\n    left: 10px;\n  }\n  h1 {\n    font-size:22pt;\n    font-weight:bold;\n    text-align:left;\n    letter-spacing:0px;\n    color:#77a;\n    margin:-50px 0px 50px 0px;\n  }\n  p {\n    margin:0px;\n    color:#669;\n    font-size:16pt;\n  }\n  hr{\n    margin:25px 0px;\n  }\n  tr{\n    margin:0px;\n  }\n  th{\n    font-size:14pt;\n    font-weight:left;\n    padding: 0px 20px;\n    margin:0px;\n    border-bottom:1px solid gray;\n  }\n  td{\n    font-size:14pt;\n    font-weight:plain;\n    text-align:right;\n    padding:0px 20px;\n    margin:0px;\n    border-bottom:1px solid gray;\n  }\n`\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 3,\n  columnNumber: 16\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanM/NzFhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVlO0FBQUEsWUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0RlO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZiIsImZpbGUiOiIuL3N0YXRpYy9TdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCA8c3R5bGU+e2BcbiAgYm9keSB7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgY29sb3I6IzY2OTtcbiAgfVxuICBoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTo2NHB0O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBsZXR0ZXItc3BhY2luZzotOHB4O1xuICAgIGNvbG9yOiNkZGRkZmY7XG4gICAgbWFyZ2luOi0zMnB4IDVweDtcbiAgfVxuICBmb290ZXIge1xuICAgIGNvbG9yOiM5OWM7XG4gICAgZm9udC1zaXplOjEycHQ7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBib2VkZXItYm90dG9tOjFweCBzb2xpZCAjOTljO1xuICAgIG1hcmdpbjo1MHB4IDBweCAxMHB4IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZToyMnB0O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOjBweDtcbiAgICBjb2xvcjojNzdhO1xuICAgIG1hcmdpbjotNTBweCAwcHggNTBweCAwcHg7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBjb2xvcjojNjY5O1xuICAgIGZvbnQtc2l6ZToxNnB0O1xuICB9XG4gIGhye1xuICAgIG1hcmdpbjoyNXB4IDBweDtcbiAgfVxuICB0cntcbiAgICBtYXJnaW46MHB4O1xuICB9XG4gIHRoe1xuICAgIGZvbnQtc2l6ZToxNHB0O1xuICAgIGZvbnQtd2VpZ2h0OmxlZnQ7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xuICB9XG4gIHRke1xuICAgIGZvbnQtc2l6ZToxNHB0O1xuICAgIGZvbnQtd2VpZ2h0OnBsYWluO1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgcGFkZGluZzowcHggMjBweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyYXk7XG4gIH1cbmB9PC9zdHlsZT47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9zdG9yYWdlXCI/ZTk4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2Uvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/storage\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });