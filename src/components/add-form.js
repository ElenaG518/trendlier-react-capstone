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
        console.log("state received by submit", this.state.adding);
        console.log("props", this.props);
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
        this.setAdding(false);
        console.log("state on submit", this.state.adding);
    }

    setAdding(adding) {
        this.setState({
            adding
        });
    }

    render() {
        if (!this.state.adding) {
            console.log("state on button", this.state.adding);
            const text = `add note`;
            return (
                <div className="add-button">
                <button className="add-item" onClick={() => this.setAdding(true)}>
                {text}
                </button>    
                </div>
            );
        }
        const label = `Add a note to wishlist item`;
        console.log("state on addForm", this.state.adding);
        return (
            <form className="add-form" onSubmit={(e) => this.onSubmit(e)}>
                <textarea
                    type="text"
                    rows="5" cols="40"
                    ref={input => this.textInput = input}
                    aria-label={label}
                    placeholder ="Add note..."
                />
                <button type="submit">add item to wishlist</button>
                <button className="cancel-item" onClick={() => this.setAdding(false)}>
                    cancel
                </button>
            </form>
        );
    }
}


