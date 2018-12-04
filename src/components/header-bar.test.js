import React from 'react';
import {shallow, mount} from 'enzyme';

import HeaderBar from './header-bar';

describe('<HeaderBar />', () => {
    it('Renders without crashing', () => {
        shallow(<HeaderBar />);
    });

});    