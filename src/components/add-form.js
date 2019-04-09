import React from 'react';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
        this.setEditing(false);
        console.log("state on submit", this.state.editing);
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            console.log("state on button", this.state.editing);
            const text = `add note`;
            return (
                <button 
                    className="add-item"
                    onClick={() => this.setEditing(true)}>
                    {text}
                </button>    
            );
        }
        const label = `Add a note to wishlist item`;
        console.log("state on addForm", this.state.editing);
        return (
            <form className="add-form" onSubmit={e => this.onSubmit(e)}>
                <textarea
                    type="text"
                    rows="5" cols="40"
                    ref={input => this.textInput = input}
                    aria-label={label}
                    placeholder ="Add note..."
                />
                <button >add item to wishlist</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    cancel
                </button>
            </form>
        );
    }
}


