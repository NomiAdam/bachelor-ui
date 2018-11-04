import React from 'react';
import { ResponsiveDrawer } from '../ResponsiveDrawer';
import { shallow } from 'enzyme';

describe('ResponsiveDrawer', () => {
    it('should be defined', () => {
        expect(ResponsiveDrawer).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<ResponsiveDrawer />)).toMatchSnapshot();
    });
    it('should have default state', () => {
        expect(shallow(<ResponsiveDrawer/>).state()).toEqual({
            isOpen: false,
        })
    });
});
