/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import SortTable from '../SortTable';

const mockOrder = 'mock';

describe('SortTable', () => {
    it('should be defined', () => {
        expect(SortTable).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<SortTable />)).toMatchSnapshot();
    });
    it('should match the snapshot when editable', () => {
        expect(shallow(<SortTable editable />)).toMatchSnapshot();
    });
    it('should be a of type div', () => {
        expect(shallow(<SortTable />).type()).toBe('div');
    });
    it('should have default state ', () => {
        expect(shallow(<SortTable orderBy={mockOrder} />).state()).toEqual({
            order: 'asc',
            orderBy: mockOrder,
            page: 1,
            rowsPerPage: 10,
        });
    });
});
