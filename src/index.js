/*
 * @Author: tim huang
 * @Date: 2018-11-10 02:08:01
 * @Last Modified by: tim huang
 * @Last Modified time: 2018-11-14 19:14:49
 */

import React, { Component } from "react";
import { Checkbox } from "antd";
import "./style.css";

export default class DecimalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  componentWillReceiveProps({ value }) {
    const { value: preValue = {} } = this.state;
    if (
      value &&
      (preValue.checked != value.checked || preValue.effect != value.effect)
    ) {
      this.setState({ value }, this.fireOnChange);
    }
  }
  shouldComponentUpdate(nextProps, { value: nextValue = {} }) {
    const { value = {} } = this.state;
    return (
      value.checked !== nextValue.checked || value.effect !== nextValue.effect
    );
  }
  fireOnChange = () => {
    let { value } = this.state;
    if (value && !value.checked) {
      value.checked = false;
    }
    if (value && !value.effect) {
      value.effect = undefined;
    }
    if (!value.checked && !value.effect) {
      value = undefined;
    }
    this.props.onChange && this.props.onChange(value);
  };
  onCheckboxChange = e => {
    const value = { ...this.state.value };
    value.checked = e.target.checked;
    this.setState({ value }, this.fireOnChange);
  };
  onEffectChange = e => {
    const value = { ...this.state.value };
    value.effect = e;
    if (e && e.target) {
      value.effect = e.target.value;
      if (e.target.type === "checkbox") {
        value.effect = e.target.checked;
      }
    }
    this.setState({ value }, this.fireOnChange);
  };
  renderEffect = () => {
    const { value = {} } = this.state;
    let { children } = this.props;
    if (!children) {
      return children;
    }
    if (children.length > 1) {
      if (process.env.NODE_ENV !== "production") {
        console.error(
          "error in ant-effect-checkbox: only need one child element."
        );
      }
      children = children[0];
    }
    return React.cloneElement(children, {
      value: value.effect,
      onChange: this.onEffectChange
    });
  };
  render() {
    const { style, checkboxProps } = this.props;
    let { className = "" } = this.props;
    let { value = {} } = this.state;
    return (
      <div className={className + " ant-effect-checkbox"} style={style}>
        <span className="ant-effect-checkbox-checked">
          <Checkbox
            checked={value.checked}
            {...checkboxProps}
            onChange={this.onCheckboxChange}
          />
        </span>
        <span className="ant-effect-checkbox-effect">
          {this.renderEffect()}
        </span>
      </div>
    );
  }
}
