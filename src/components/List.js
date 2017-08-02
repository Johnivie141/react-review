import React, { Component } from 'react';

export default class List extends Component{

    remove(i){
        console.log(i);
        this.props.removeItem(i);
    }

    render(){
        const listItems = this.props.list.map((e,i,a)=>{
            return (
                <div>
                    <li key={i} >{e} <button onClick={()=>this.remove(i)} >X</button></li>
                </div>
            )
        });
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}