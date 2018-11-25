import React from 'react';
import { shallow } from 'enzyme';
import { SideDrawer } from '../SideDrawer';

describe('SideDrawer', () => {
    it('should be defined', () => {
        expect(SideDrawer).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SideDrawer />)).toMatchSnapshot();
    });
    it('should have default state', () => {
        expect(shallow(<SideDrawer />).state()).toEqual({
            isOpen: false,
        });
    });
});
