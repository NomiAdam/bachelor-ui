/* eslint-disable no-undef */
import React from 'react';
import TabBar, {StyledTabBarWrapper} from '../TabBar';
import { shallow } from 'enzyme';

const handleClick = jest.fn();
const mockTabCells = ['one', 'two'];

describe('TabBar', () => {
    it('should be defined', () => {
        expect(TabBar).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<TabBar handleClick={handleClick} />)).toMatchSnapshot();
    });
    it('should match the snapshot with mockTabCells', () => {
        expect(shallow(<TabBar handleClick={handleClick} tabOptions={mockTabCells} />)).toMatchSnapshot();
    });
    it('should be of type StyledTabBarWrapper', () => {
        expect(shallow(<TabBar handleClick={handleClick} />).type()).toBe(StyledTabBarWrapper);
    });
});
