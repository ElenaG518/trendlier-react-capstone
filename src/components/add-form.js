import React from 'react';

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adding: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        console.log("props", this.props);
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
        this.setAdding(false);
    }

    setAdding(adding) {
        this.setState({
            adding
        });
    }

    render() {
        if (!this.state.adding) {
            const text = `Add item to wishlist`;
            return (
                <div className="add-button">
                <button onClick={() => this.setAdding(true)}>
                {text}
                </button>    
                </div>
            );
        }
        const label = `Add a note to wishlist item`;
        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                <textarea
                    type="text"
                    rows="5" cols="20"
                    ref={input => this.textInput = input}
                    aria-label={label}
                    placeholder ="Add note..."
                />
                <button>Add item</button>
                <button type="button" onClick={() => this.setAdding(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}


