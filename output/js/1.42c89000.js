(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/modules/Home/index.js":
/*!***********************************!*\
  !*** ./src/modules/Home/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _appFunc = __webpack_require__(/*! Utils/appFunc */ "./src/utils/appFunc.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.gotoPage = function () {
            (0, _appFunc.goto)('detail');
        }, _this.gotoPageFunc = function () {
            (0, _appFunc.goto)('https://baidu.com', 2);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { onClick: this.gotoPage },
                    'homwaa'
                ),
                _react2.default.createElement(
                    'div',
                    { onClick: this.gotoPageFunc },
                    'local'
                )
            );
        }
    }]);
    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Ib21lL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJnb3RvUGFnZSIsImdvdG9QYWdlRnVuYyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7NE1BQ2pCQyxRLEdBQVcsWUFBTTtBQUNiLCtCQUFLLFFBQUw7QUFDSCxTLFFBQ0RDLFksR0FBZSxZQUFNO0FBQ2pCLCtCQUFLLG1CQUFMLEVBQTBCLENBQTFCO0FBQ0gsUzs7Ozs7aUNBQ1E7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQUssU0FBVyxLQUFLRCxRQUFyQjtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUEsc0JBQUssU0FBVyxLQUFLQyxZQUFyQjtBQUFBO0FBQUE7QUFGSixhQURKO0FBTUg7OztFQWQ2QkMsZ0JBQU1DLFM7O2tCQUFuQkosSSIsImZpbGUiOiJqcy8xLjQyYzg5MDAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdvdG8gfSBmcm9tICdVdGlscy9hcHBGdW5jJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGdvdG9QYWdlID0gKCkgPT4ge1xuICAgICAgICBnb3RvKCdkZXRhaWwnKVxuICAgIH1cbiAgICBnb3RvUGFnZUZ1bmMgPSAoKSA9PiB7XG4gICAgICAgIGdvdG8oJ2h0dHBzOi8vYmFpZHUuY29tJywgMik7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrID0ge3RoaXMuZ290b1BhZ2V9PmhvbXdhYTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljayA9IHt0aGlzLmdvdG9QYWdlRnVuY30+bG9jYWw8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=