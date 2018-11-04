/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import TableCell, { StyledTableCell } from '../TableCell';

describe('TableCell', () => {
	it('should be defined', () => {
		expect(shallow(<TableCell/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<TableCell/>)).toMatchSnapshot();
	});
	it('should be of type StyledTableCell', () => {
		expect(shallow(<TableCell />).type()).toBe(StyledTableCell);
	});
});
