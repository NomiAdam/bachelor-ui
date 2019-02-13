/* eslint-disable no-undef */
import React from 'react';
import List, {StyledList} from '../List';
import { shallow } from 'enzyme';

describe('List', () => {

	it('should be defined', () => {
		expect(shallow(<List />)).toBeDefined();
	});

	it('should match the snapshot', () => {
		expect(shallow(<List />)).toMatchSnapshot();
	});

	it('should be of correct type', () => {
		expect(shallow(<List/>).type()).toBe(StyledList);
	});

});