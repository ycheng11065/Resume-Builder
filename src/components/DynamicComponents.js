import React, { Component } from "react";

class DynamicComponents extends Component {
    constructor(props, config) {
        super(props);

        this.state = {
            items: [],
            inputValues: {},
        };

        this.itemName = config.itemName;
        this.title = config.title;
        this.defaultInputValues = config.defaultInputValues;
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
        const itemId = `${this.itemName}-${itemCount + 1}`;

        this.setState({
            items: [ ...items, itemId],
            inputValues: { 
                ...inputValues, 
                [itemId]: {
                    ...this.defaultInputValues,
                },
            },  
        });
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
                    </div>
                ))}
            </div>
        );
    }
}

export default DynamicComponents;