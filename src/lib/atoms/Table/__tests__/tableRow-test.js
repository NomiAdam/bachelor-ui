/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TableRow, { StyledTableRow, StyledEdit, StyledTrash } from '../TableRow';
import TableCell from '../TableCell';

const mockEdit = jest.fn();
const mockDelete = jest.fn();

const mockTableRowData = {
    id: 'id',
    date: 'mock',
    another: 'mock',
};

describe('TableRow', () => {
	it('should be defined', () => {
		expect(shallow(<TableRow/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<TableRow/>)).toMatchSnapshot();
	});
    it('should match the snapshot when editable', () => {
        expect(shallow(<TableRow editable/>)).toMatchSnapshot();
    });
	it('should be StyledTableRow', () => {
		expect(shallow(<TableRow/>).type()).toBe(StyledTableRow);
	});
    it('should not trigger delete on render', () => {
        shallow(<TableRow handleDelete={mockDelete} />);
        expect(mockDelete).not.toHaveBeenCalled();
    });
    it('should not trigger edit on render', () => {
        shallow(<TableRow handleEdit={mockEdit} />);
        expect(mockEdit).not.toHaveBeenCalled();
    });
    it('should have FaEdit icon when editable', () => {
        const wrapper = shallow(<TableRow editable/>);
        expect(wrapper.find(StyledEdit).length).toBe(1);
    });
    it('should have FaTrash icon when editable', () => {
        const wrapper = shallow(<TableRow editable/>);
        expect(wrapper.find(StyledTrash).length).toBe(1);
    });
    it('should have FaTrash icon when editable', () => {
        const wrapper = shallow(<TableRow editable/>);
        expect(wrapper.find(StyledTrash).length).toBe(1);
    });
    it('should have no TableCell when rowData are empty', () => {
        const wrapper = shallow(<TableRow tableRowData={{}}/>);
        expect(wrapper.find(TableCell).length).toBe(0);
    });
    it('should have matching number of table cells when rowData props has changed, note that id does not count ', () => {
        const wrapper = shallow(<TableRow tableRowData={{}}/>);
        wrapper.setProps({ tableRowData: mockTableRowData });
        expect(wrapper.find(TableCell).length).toBe(2);
    })
});
