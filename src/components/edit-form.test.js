import React from 'react';
import {shallow, mount} from 'enzyme';

import EditForm from './edit-form';

describe('<EditForm />', () => {
    it('Renders without crashing', () => {
        shallow(<EditForm />);
    });

    it('Renders the edit button initially', () => {
        const wrapper = shallow(<EditForm />);
        expect(wrapper.hasClass('edit-button')).toEqual(true);
    });

    it('Should render the edit form when editing', () => {
        const wrapper = shallow(<EditForm />);
        wrapper.instance().setEditing(true);
        wrapper.update();
        expect(wrapper.hasClass('edit-form')).toEqual(true);
    });

    it('Should switch to editing when the add button is clicked', () => {
        const wrapper = shallow(<EditForm />);
        wrapper.simulate('click');
        expect(wrapper.state('editing')).toEqual(true);
    });

    it('Should fire the onEdit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<EditForm onEdit={callback} />);
        const value = 'Foobar';
        wrapper.instance().setEditing(true);
        wrapper.update();
        wrapper.find('textarea[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire onEdit if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<EditForm onEdit={callback} />);
        wrapper.instance().setEditing(true);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
});