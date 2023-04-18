import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

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
        // const itemCount = items.length;
        const itemId = uuidv4();

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

    handleDelete = (itemId) => {
        const { items, inputValues} = this.state;

        this.setState({
            items: items.filter(item => item !== itemId),
            inputValues: Object.entries(inputValues)
                .filter(([key]) => key !== itemId)
                .reduce((obj, [key, value]) => {
                    obj[key] = value;
                    return obj;
            }, {}),
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
                        <button onClick={() => this.handleDelete(itemId)}>Delete</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default DynamicComponents;