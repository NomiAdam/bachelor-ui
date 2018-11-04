/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TableHeadingCell, {StyledHeadingTableCell} from '../TableHeadingCell';

const mockRequestSort = jest.fn();

describe('TableHeadingCell', () => {
    it('should be defined', () => {
        expect(shallow(<TableHeadingCell/>)).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<TableHeadingCell/>)).toMatchSnapshot();
    });
    it('should match the snapshot when beingSorted and order is "asc" ', () => {
        expect(shallow(<TableHeadingCell beingSorted order={'asc'}/>)).toMatchSnapshot();
    });
    it('should match the snapshot when beingSorted and order is "desc" ', () => {
        expect(shallow(<TableHeadingCell beingSorted order={'desc'} />)).toMatchSnapshot();
    });
    it('should be of type StyledHeadingTableCell', () => {
        expect(shallow(<TableHeadingCell/>).type()).toBe(StyledHeadingTableCell);
    });
    it('should not trigger the action on render', () => {
        shallow(<TableHeadingCell onRequestSort={mockRequestSort} />);
        expect(mockRequestSort).not.toHaveBeenCalled();
    });
    it('should trigger the action on click', () => {
        const wrapper = shallow(<TableHeadingCell onRequestSort={mockRequestSort} />);
        wrapper.find(StyledHeadingTableCell).simulate('click');
        expect(mockRequestSort).toHaveBeenCalled();
    });
});
