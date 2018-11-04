import React from 'react';
import SideDrawer, { StyledSideDrawer } from '../SideDrawer';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('SideDrawer', () => {
    it('should be defined', () => {
        expect(SideDrawer).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SideDrawer />)).toMatchSnapshot();
    });
    it('should be of type StyledSideDrawer', () => {
        expect(shallow(<SideDrawer/>).type()).toBe(StyledSideDrawer);
    });
    it('should have matching transform when isOpen is false', () => {
        const wrapper = shallow(<SideDrawer />);
        expect(wrapper.find(StyledSideDrawer)).toHaveStyleRule('transform', 'translateX(-100%)');
    });
});
