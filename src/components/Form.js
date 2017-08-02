import React, { Component } from 'react';

export default class Form extends Component{
    constructor(){
        super();
        this.state = {
            item: ''
        }
    }

    handleChange(val){
        this.setState({
            item: val
        })
    }
    submit(){
        console.log('Form method');
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        })
    }

    render(){
        return (
            <div>
                <h1>Add items</h1>
                <div>
                    <label>Item</label>
                    <input type='text' value={this.state.item} onChange={e=>this.handleChange(e.target.value)} ></input>
                </div>
                <div>
                    <button type='submit' onClick={_=>this.submit()}>Add</button>
                </div>
            </div>
        )
    }
}