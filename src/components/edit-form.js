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
        console.log("props", this.props);
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
            const text = `Edit wishlist note`;
            return (
                <div className="add-button">
                <button onClick={() => this.setEditing(true)}>
                    {text}
                </button>    
                </div>
            );
        }
        const label = `Edit wishlist item note`;
        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
           
                <textarea
                    name="notes"
                    id="notes"
                    rows="5" cols="20"
                    defaultValue = {`${this.props.notes}`}
                    type="text"
                    ref={input => this.textInput = input}
                    aria-label={label}
                />
                
            
                <button>submit</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
