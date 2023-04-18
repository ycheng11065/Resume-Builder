import React, { Component } from "react";

class DynamicComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            inputValues: {},
        };
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
        });
      };
    
    addItem = () => {
        const { items, inputValues } = this.state;
        const itemCount = items.length;
        const itemId = `${this.props.itemName}-${itemCount + 1}`;

        this.setState({
            items: [ ...items, itemId],
            inputValues: { 
                ...inputValues, 
                [itemId]: this.props.defaultInputValues,
            },
        });
    };

    renderInputList() {
        const { items, inputValues } = this.state;
        return items.map((itemId) => this.props.renderInputs(itemId, inputValues[itemId], this.handleChange(itemId)));
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <button onClick={this.addItem}>Add {this.props.itemName}</button>
                {this.renderInputList}
            </div>
        );
    }
}

export default DynamicComponents;