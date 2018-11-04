/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TableBody from '../TableBody';
import TableRow from '../TableRow';

const mockBodyKey = 'mock1';
const mockBody = {
    [mockBodyKey]: {
        label: 'Mock 1',
        value: [],
    },
    mock2: {
        label: 'Mock 2',
        value: [],
    }
};

const mockRange = 5;
const mockChange = jest.fn();

const renderTableBody = (
    <TableBody
        rowRange={mockRange}
        selected={mockBody}
        handleChange={mockChange}
    />
);


describe('CheckTableBody', () => {
    it('should be defined', () => {
        expect(TableBody).toBeDefined();
    });
    it('should match the snapshot', () => {
        expect(shallow(<TableBody />)).toMatchSnapshot();
    });
    it('should match the snapshot with data', () => {
        expect(shallow(renderTableBody)).toMatchSnapshot();
    });
    it('should be of type tbody', () => {
        expect(shallow(renderTableBody).type()).toBe('tbody');
    });
    it('should render the same amount of row as are selected props', () => {
        const wrapper = shallow(<TableBody handleChange={mockChange}/>);
        wrapper.setProps({ selected: mockBody });
        expect(wrapper.find(TableRow).length).toBe(2);
    });
});
