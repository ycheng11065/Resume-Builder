import "./DynamicComponents.css";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

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
      <div className="Component-Root">
        <h2 className="Component-Title">{this.title}</h2>
        <div className="Component-Section">
          {items.map((itemId) => (
            <div className="Component-Input" key={itemId}>
              {this.renderInputs(itemId, inputValues, this.handleChange(itemId))}
              <button className="Component-Delete" onClick={() => this.handleDelete(itemId)}>
                <AiOutlineClose size />
              </button>
            </div>
          ))}
          <button className="Component-Add" onClick={this.addItem}>
            <AiOutlinePlus size />  
          </button>
        </div>
      </div>
    );
  }
}

export default DynamicComponents;
