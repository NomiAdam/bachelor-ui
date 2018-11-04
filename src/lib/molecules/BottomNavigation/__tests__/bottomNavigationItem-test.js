import React from 'react';
import BottomNavigationItem, { StyledNavigationItem } from '../BottomNavigationItem';
import { shallow } from 'enzyme';

describe('BottomNavigationItem', () => {
    it('should be defined', () => {
        expect(BottomNavigationItem).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<BottomNavigationItem />)).toMatchSnapshot();
    });
    it('should be of type StyledNavigationItem', () => {
        expect(shallow(<BottomNavigationItem/>).type()).toBe(StyledNavigationItem);
    });
});
