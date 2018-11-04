import React from 'react';
import BottomNavigation, { StyledBottomNavigation } from '../BottomNavigation';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { lightTheme } from '../../../constants/theme';

const mockClickHandler = jest.fn();
const mockItems = [
    {
        icon: null,
        label: 'mock',
        id: 'mock',
    },
    {
        icon: null,
        label: 'mock',
        id: 'mock',
    }
];

describe('BottomNavigation', () => {
    it('should be defined', () => {
        expect(BottomNavigation).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<BottomNavigation handleClick={mockClickHandler} />)).toMatchSnapshot();
    });
    it('should match the snapshot with items', () => {
        expect(shallow(<BottomNavigation handleClick={mockClickHandler} items={mockItems}/>)).toMatchSnapshot();
    });
    it('should be of type StyledBottomNavigation', () => {
        expect(shallow(<BottomNavigation handleClick={mockClickHandler} />).type()).toBe(StyledBottomNavigation);
    });
    it('should have default background-color', () => {
        const wrapper = shallow(<BottomNavigation handleClick={mockClickHandler} />);
        expect(wrapper.find(StyledBottomNavigation)).toHaveStyleRule('background-color', lightTheme.lightBlue);
    });
    it('should have matching background-color', () => {
        const wrapper = shallow(<BottomNavigation handleClick={mockClickHandler} background={'red'} />);
        expect(wrapper.find(StyledBottomNavigation)).toHaveStyleRule('background-color', 'red');
    });
});
