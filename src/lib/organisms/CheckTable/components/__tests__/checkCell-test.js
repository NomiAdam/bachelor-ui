/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import CheckCell, { StyledTableCell } from '../CheckCell';
import 'jest-styled-components';
import { lightTheme } from '../../../../constants/theme';

describe('CheckCell', () => {
    it('should be defined', () => {
        expect(shallow(<CheckCell/>)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<CheckCell/>)).toMatchSnapshot();
    });
    it('should be of type StyledCheckCell', () => {
        expect(shallow(<CheckCell />).type()).toBe(StyledTableCell);
    });
    it('should have transparent color on default', () => {
        const wrapper = shallow(<CheckCell />);
        expect(wrapper.find(StyledTableCell)).toHaveStyleRule('background-color', 'transparent');
    });
    it('should have blue color when checked', () => {
        const wrapper = shallow(<CheckCell checked />);
        expect(wrapper.find(StyledTableCell)).toHaveStyleRule('background-color', lightTheme.lightBlue);
    });
});
