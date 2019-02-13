/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import Table, {StyledTable} from '../Table';

describe('Table', () => {

	it('should be defined', () => {
		expect(shallow(<Table/>)).toBeDefined();
	});

	it('should match the snapshot', () => {
		expect(shallow(<Table/>)).toMatchSnapshot();
	});

	it('should be td by default', () => {
		expect(shallow(<Table/>).type()).toBe(StyledTable);
	});

});