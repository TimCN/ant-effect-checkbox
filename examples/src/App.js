import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Form, Input, Button, Checkbox, DatePicker, Select, Radio } from "antd";
import EffectCheckbox from "../../lib";
const { RangePicker } = DatePicker;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

class App extends Component {
  state = {
    initialInputEc: undefined
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  onInitClick = () => {
    this.setState({
      initialInputEc: {
        checked: true,
        effect: 999
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { initialInputEc } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="inputEc">
          {getFieldDecorator("inputEc", {
            initialValue: initialInputEc,
            rules: [{ required: true, message: "please !" }]
          })(
            <EffectCheckbox>
              <Input placeholder="placeholder for input" />
            </EffectCheckbox>
          )}
        </FormItem>
        <FormItem style={{ textAlign: "center" }}>
          <Button type="primary" onClick={this.onInitClick}>
            dynamic init
          </Button>
        </FormItem>

        <FormItem {...formItemLayout} label="inputEc2">
          {getFieldDecorator("inputEc2", {
            initialValue: {
              checked: true,
              effect: "init inputEc2"
            }
          })(
            <EffectCheckbox>
              <Input />
            </EffectCheckbox>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="selectEc">
          {getFieldDecorator("selectEc")(
            <EffectCheckbox>
              <Select>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="tim">Tim Huang</Option>
              </Select>
            </EffectCheckbox>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="rangePickerEc">
          {getFieldDecorator("rangePickerEc")(
            <EffectCheckbox>
              <RangePicker />
            </EffectCheckbox>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="radioGroupEc">
          {getFieldDecorator("radioGroupEc")(
            <EffectCheckbox>
              <RadioGroup>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </RadioGroup>
            </EffectCheckbox>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="checkboxEc">
          {getFieldDecorator("checkboxEc")(
            <EffectCheckbox>
              <Checkbox>Married?</Checkbox>
            </EffectCheckbox>
          )}
        </FormItem>
        <FormItem style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(App);
