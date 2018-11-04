/* eslint-disable no-undef */
import React from 'react';
import TabCell, {StyledTabButton} from '../TabCell';
import { shallow } from 'enzyme';
import 'jest-styled-components';

const mockLabel = 'label';
const mockClick = jest.fn();

describe('TabCell', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should be defined', () => {
        expect(TabCell).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<TabCell />)).toMatchSnapshot();
    });
    it('should be of type StyledTabButton', () => {
        expect(shallow(<TabCell />).type()).toBe(StyledTabButton);
    });
    it('should have inherit background color when not active', () => {
        const wrapper = shallow(<TabCell />);
        expect(wrapper.find(StyledTabButton)).toHaveStyleRule('background-color','inherit');
    });
    it('should have #ccc background color when not active', () => {
        const wrapper = shallow(<TabCell active />);
        expect(wrapper.find(StyledTabButton)).toHaveStyleRule('background-color','inherit');
    });
    it('should fire on render with label name', () => {
        shallow(<TabCell handleClick={mockClick} label={mockLabel} />);
        expect(mockClick).toHaveBeenCalledWith(mockLabel);
    });
});
