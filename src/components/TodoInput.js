import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        const doButton = editItem ? 
            <button type="submit" className="btn btn-block btn-success mt-3">edit item</button> :
            <button type="submit" className="btn btn-block btn-primary mt-3">add item</button>;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                           <div className="input-group-text bg-primary text-white">
                             <i className="fas fa-book"></i>
                           </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control text-capitalize" placeholder="add a todo item" 
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    {doButton}
                </form>
            </div>
        )
    }
}
