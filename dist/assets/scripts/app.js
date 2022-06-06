/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Map = /*#__PURE__*/function () {\n  function Map() {\n    _classCallCheck(this, Map);\n  }\n\n  _createClass(Map, [{\n    key: \"render\",\n    value: function render(coord) {\n      if (!google) {\n        console.log('Could not load maps library - please try again');\n        return;\n      }\n\n      var listMapElement = document.querySelectorAll('.my-location');\n      console.log(listMapElement);\n      var mapConfig = {\n        center: {\n          lat: coord.lat,\n          lng: coord.lng\n        },\n        zoom: 6\n      };\n      var map1 = new google.maps.Map(listMapElement[0], mapConfig);\n      var map2 = new google.maps.Map(listMapElement[1], mapConfig);\n      new google.maps.Marker({\n        position: {\n          lat: coord.lat,\n          lng: coord.lng\n        },\n        map: map1\n      });\n      new google.maps.Marker({\n        position: {\n          lat: coord.lat,\n          lng: coord.lng\n        },\n        map: map2\n      });\n    }\n  }]);\n\n  return Map;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VJL01hcC5qcz9iNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHJlbmRlcihjb29yZCkge1xyXG4gICAgICAgIGlmICghZ29vZ2xlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RNYXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm15LWxvY2F0aW9uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobGlzdE1hcEVsZW1lbnQpXHJcbiAgICAgICAgY29uc3QgbWFwQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBjZW50ZXI6IHsgbGF0OiBjb29yZC5sYXQsIGxuZzogY29vcmQubG5nIH0sXHJcbiAgICAgICAgICAgIHpvb206IDYsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtYXAxID0gbmV3IGdvb2dsZS5tYXBzLk1hcChsaXN0TWFwRWxlbWVudFswXSwgbWFwQ29uZmlnKTtcclxuICAgICAgICBjb25zdCBtYXAyID0gbmV3IGdvb2dsZS5tYXBzLk1hcChsaXN0TWFwRWxlbWVudFsxXSwgbWFwQ29uZmlnKTtcclxuXHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogY29vcmQubGF0LCBsbmc6IGNvb3JkLmxuZyB9LFxyXG4gICAgICAgICAgICBtYXA6IG1hcDEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogY29vcmQubGF0LCBsbmc6IGNvb3JkLmxuZyB9LFxyXG4gICAgICAgICAgICBtYXA6IG1hcDIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQTNCQTtBQUNBO0FBREE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar GITHUB_URL = 'https://github.com/ycabrera90';\n\nvar LoadedPlace = /*#__PURE__*/_createClass(function LoadedPlace(coordinates) {\n  _classCallCheck(this, LoadedPlace);\n\n  var map = new _UI_Map__WEBPACK_IMPORTED_MODULE_0__[\"Map\"]();\n  map.render(coordinates);\n});\n\nvar NavBar = /*#__PURE__*/function () {\n  function NavBar() {\n    var _this = this;\n\n    _classCallCheck(this, NavBar);\n\n    this.navBar = document.getElementById('nav-bar');\n    this.navBarButton = this.navBar.querySelector('.navbar-toggler');\n    this.backDrop = this.navBar.querySelector('.backdrop');\n    this.githubButton = this.navBar.querySelector('.github-button');\n    this.navBarButton.addEventListener('click', function () {\n      _this.toggleButton();\n\n      _this.toggleBackdrop();\n    });\n    this.backDrop.addEventListener('click', function () {\n      _this.toggleButton();\n\n      _this.toggleBackdrop();\n\n      _this.collapseBar();\n    });\n    this.githubButton.addEventListener('click', function () {\n      window.location.href = GITHUB_URL;\n    });\n  }\n\n  _createClass(NavBar, [{\n    key: \"toggleBackdrop\",\n    value: function toggleBackdrop() {\n      this.backDrop.classList.toggle('show');\n    }\n  }, {\n    key: \"toggleButton\",\n    value: function toggleButton() {\n      var icon = this.navBar.querySelector('.navbar-toggler i');\n      icon.classList.toggle('bi-menu-button-wide-fill');\n      icon.classList.toggle('bi-menu-button-wide');\n    }\n  }, {\n    key: \"collapseBar\",\n    value: function collapseBar() {\n      var collapseBar = this.navBar.querySelector('.navbar-collapse');\n      collapseBar.classList.toggle('show');\n    }\n  }]);\n\n  return NavBar;\n}();\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, null, [{\n    key: \"init\",\n    value: function init() {\n      new LoadedPlace({\n        lat: -34.88761217420463,\n        lng: -56.17486101765247\n      });\n      new NavBar();\n    }\n  }]);\n\n  return App;\n}();\n\nApp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcCB9IGZyb20gJy4vVUkvTWFwJztcclxuXHJcbmNvbnN0IEdJVEhVQl9VUkwgPSAnaHR0cHM6Ly9naXRodWIuY29tL3ljYWJyZXJhOTAnO1xyXG5cclxuY2xhc3MgTG9hZGVkUGxhY2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcclxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgbWFwLnJlbmRlcihjb29yZGluYXRlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE5hdkJhciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtYmFyJyk7XHJcbiAgICAgICAgdGhpcy5uYXZCYXJCdXR0b24gPSB0aGlzLm5hdkJhci5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLXRvZ2dsZXInKTtcclxuICAgICAgICB0aGlzLmJhY2tEcm9wID0gdGhpcy5uYXZCYXIucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgICAgICAgdGhpcy5naXRodWJCdXR0b24gPSB0aGlzLm5hdkJhci5xdWVyeVNlbGVjdG9yKCcuZ2l0aHViLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLm5hdkJhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVCdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVCYWNrZHJvcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2tEcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJhY2tkcm9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VCYXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5naXRodWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gR0lUSFVCX1VSTDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVCYWNrZHJvcCgpIHtcclxuICAgICAgICB0aGlzLmJhY2tEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IHRoaXMubmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItdG9nZ2xlciBpJyk7XHJcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdiaS1tZW51LWJ1dHRvbi13aWRlLWZpbGwnKTtcclxuICAgICAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ2JpLW1lbnUtYnV0dG9uLXdpZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZUJhcigpIHtcclxuICAgICAgICBjb25zdCBjb2xsYXBzZUJhciA9IHRoaXMubmF2QmFyLnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItY29sbGFwc2UnKTtcclxuICAgICAgICBjb2xsYXBzZUJhci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICBuZXcgTG9hZGVkUGxhY2UoeyBsYXQ6IC0zNC44ODc2MTIxNzQyMDQ2MywgbG5nOiAtNTYuMTc0ODYxMDE3NjUyNDcgfSk7XHJcblxyXG4gICAgICAgIG5ldyBOYXZCYXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuQXBwLmluaXQoKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });