import React from 'react';
import {shallow, mount} from 'enzyme';

import AddForm from './add-form';

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddForm />);
    });

    it('Renders the add button initially', () => {
        const wrapper = shallow(<AddForm />);
        expect(wrapper.hasClass('add-button')).toEqual(true);
    });

    it('Should render the add form when adding', () => {
        const wrapper = shallow(<AddForm />);
        wrapper.instance().setAdding(true);
        wrapper.update();
        expect(wrapper.hasClass('add-form')).toEqual(true);
    });

    it('Should switch to adding when the add note button is clicked', () => {
        const wrapper = shallow(<AddForm />);
        // wrapper.instance().setAdding(false);
        wrapper.simulate('click');
        expect(wrapper.state('adding')).toEqual(true);
    });

    it('Should fire the onAdd callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<AddForm onAdd={callback} />);
        const value = 'Foobar';
        wrapper.instance().setAdding(true);
        wrapper.update();
        wrapper.find('textarea[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire onAdd if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<AddForm onAdd={callback} />);
        wrapper.instance().setAdding(true);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
});