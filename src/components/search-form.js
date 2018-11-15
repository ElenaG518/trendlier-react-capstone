import React from 'react';



export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        

        this.onChange = this.onChange.bind(this);
    }
        
      handleSelectChange = (event) => {
        event.preventDefault();
        const category = event.target.value;
        if (category && this.props.onGetCategory) {
            this.props.onGetCategory(this.event.target.value);
        }
        
    }

    render() {
        return (
            <form className="js-search-form">
                
                <label className="search-label">Please select a category from the drop down menu:
                    <select name="category" className="category-name" autofocus
                    onChange={this.handleSelectChange}>
                        <option>Category</option>
                        <option value="abcat0401000">Digital Cameras</option>
                        <option value="pcmcat242800050021">Health, Fitness & Beauty</option>
                        <option value="abcat0204000">Headphones</option>
                        <option value="pcmcat241600050001">Home Audio</option>
                        <option value="pcmcat254000050002">Home Automation & Security</option>
                        <option value="pcmcat209000050006">iPad, Tablets & E-Readers</option>
                        <option value="abcat0502000">Laptops</option>
                        <option value="pcmcat310200050004">Portable & Wireless Speakers</option>
                        <option value="abcat0101000">TVs</option>
                    </select>
                </label>
                
            </form>
        );
    }
}


