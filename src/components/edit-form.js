import React from 'react';

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onEdit) {
            this.props.onEdit(text);
        }
        this.textInput.value = '';
        this.setEditing(false);
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            console.log("state on button", this.state.editing);
            const text = `edit wishlist note`;
            return (
                <button 
                    className="edit-button"
                    onClick={() => this.setEditing(true)}>
                    {text}
                </button>    
            );
        }
        const label = `Edit wishlist item note`;
        console.log("state on addForm", this.state.editing);
        return (
            <form className="edit-form" onSubmit={(e) => this.onSubmit(e)}>
           
                <textarea
                    type="text"
                    id="notes"
                    rows="5" cols="40"
                    defaultValue = {`${this.props.notes}`}
                    ref={input => this.textInput = input}
                    aria-label={label}
                />         
                <button>submit</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    cancel
                </button>
            </form>
        );
    }
}
