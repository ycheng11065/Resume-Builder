import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class DynamicComponents extends Component {
  constructor(props, config) {
    super(props);
    this.state = {
      items: props.data.items || [],
      inputValues: props.data.inputValues || {},
    };

    this.itemName = config.itemName;
    this.title = config.title;
    this.defaultInputValues = config.defaultInputValues;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        items: this.props.data.items || [],
        inputValues: this.props.data.inputValues || {},
      });
    }
  }

  handleChange = (itemId) => (e) => {
    const { name, value } = e.target;

    this.setState({
      inputValues: {
        ...this.state.inputValues,
        [itemId]: {
          ...this.state.inputValues[itemId],
          [name]: value,
        },
      },
    }, () => this.props.onUpdate(this.state));
  };

  addItem = () => {
    const { items, inputValues } = this.state;
    const itemId = uuidv4();

    this.setState({
      items: [...items, itemId],
      inputValues: {
        ...inputValues,
        [itemId]: {
          ...this.defaultInputValues,
        },
      },
    }, () => this.props.onUpdate(this.state));
  };

  handleDelete = (itemId) => {
    const { items, inputValues } = this.state;

    this.setState({
      items: items.filter((item) => item !== itemId),
      inputValues: Object.entries(inputValues)
        .filter(([key]) => key !== itemId)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {}),
    }, () => this.props.onUpdate(this.state));
  };

  render() {
    const { items, inputValues } = this.state;

    return (
      <div>
        <h2>{this.title}</h2>
        <button onClick={this.addItem}>Add {this.itemName}</button>
        {items.map((itemId) => (
          <div key={itemId}>
            {this.renderInputs(itemId, inputValues, this.handleChange(itemId))}
            <button onClick={() => this.handleDelete(itemId)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default DynamicComponents;
