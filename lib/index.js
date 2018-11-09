"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: tim huang
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date: 2018-11-10 02:08:01
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified by: tim huang
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Last Modified time: 2018-11-10 03:01:46
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DecimalInput = function (_Component) {
  _inherits(DecimalInput, _Component);

  function DecimalInput(props) {
    _classCallCheck(this, DecimalInput);

    var _this = _possibleConstructorReturn(this, (DecimalInput.__proto__ || Object.getPrototypeOf(DecimalInput)).call(this, props));

    _this.fireOnChange = function () {
      var value = _this.state.value;

      if (value && !value.checked) {
        value.checked = false;
      }
      if (value && !value.effect) {
        value.effect = undefined;
      }
      if (!value.checked && !value.effect) {
        value = undefined;
      }
      _this.props.onChange && _this.props.onChange(value);
    };

    _this.onCheckboxChange = function (e) {
      var value = _extends({}, _this.state.value);
      value.checked = e.target.checked;
      _this.setState({ value: value }, _this.fireOnChange);
    };

    _this.onEffectChange = function (e) {
      var value = _extends({}, _this.state.value);
      value.effect = e;
      if (e && e.target) {
        value.effect = e.target.value;
        if (e.target.type === "checkbox") {
          value.effect = e.target.checked;
        }
      }
      _this.setState({ value: value }, _this.fireOnChange);
    };

    _this.renderEffect = function () {
      var _this$state$value = _this.state.value,
          value = _this$state$value === undefined ? {} : _this$state$value;
      var children = _this.props.children;

      if (!children) {
        return children;
      }
      if (children.length > 1) {
        if (process.env.NODE_ENV !== "production") {
          console.error("error in ant-effect-checkbox: only need one child element.");
        }
        children = children[0];
      }
      return _react2.default.cloneElement(children, {
        value: value.effect,
        onChange: _this.onEffectChange
      });
    };

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(DecimalInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value;

      if (!this.state.value && value) {
        this.setState({ value: value }, this.fireOnChange);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, _ref2) {
      var _ref2$value = _ref2.value,
          nextValue = _ref2$value === undefined ? {} : _ref2$value;
      var _state$value = this.state.value,
          value = _state$value === undefined ? {} : _state$value;

      return value.checked !== nextValue.checked || value.effect !== nextValue.effect;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          style = _props.style,
          checkboxProps = _props.checkboxProps;
      var _props$className = this.props.className,
          className = _props$className === undefined ? "" : _props$className;
      var _state$value2 = this.state.value,
          value = _state$value2 === undefined ? {} : _state$value2;

      return _react2.default.createElement(
        "div",
        { className: className + " ant-effect-checkbox", style: style },
        _react2.default.createElement(
          "span",
          { className: "ant-effect-checkbox-checked" },
          _react2.default.createElement(_antd.Checkbox, _extends({
            checked: value.checked
          }, checkboxProps, {
            onChange: this.onCheckboxChange
          }))
        ),
        _react2.default.createElement(
          "span",
          { className: "ant-effect-checkbox-effect" },
          this.renderEffect()
        )
      );
    }
  }]);

  return DecimalInput;
}(_react.Component);

exports.default = DecimalInput;