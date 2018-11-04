import React from 'react';
import DrawerToggleButton, { StyledToggleButton, StyledButtonLine } from '../DrawerToggleButton';
import { shallow } from 'enzyme';

describe('DrawerToggleButton', () => {
    it('should be defined', () => {
        expect(DrawerToggleButton).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<DrawerToggleButton />)).toMatchSnapshot();
    });
    it('should be of type StyledToggleButton', () => {
        expect(shallow(<DrawerToggleButton/>).type()).toBe(StyledToggleButton);
    });
    it('should have 3 StyledButtonLines nodes defined', () => {
       const wrapper = shallow(<DrawerToggleButton/>);
       expect(wrapper.find(StyledToggleButton).dive().find(StyledButtonLine).length).toBe(3);
    });
});
