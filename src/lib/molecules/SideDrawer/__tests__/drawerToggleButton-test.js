import React from 'react';
import { shallow } from 'enzyme';
import BurgerButton, { StyledToggleButton, StyledButtonLine } from '../BurgerButton';

describe('BurgerButton', () => {
    it('should be defined', () => {
        expect(BurgerButton).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<BurgerButton />)).toMatchSnapshot();
    });
    it('should have 3 StyledButtonLines nodes defined', () => {
        const wrapper = shallow(<BurgerButton />);
        expect(wrapper.find(StyledToggleButton).dive().find(StyledButtonLine).length).toBe(3);
    });
});
