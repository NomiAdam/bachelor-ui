/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import Option from '../Option';

describe('Option', () => {
	it('should be defined', () => {
		expect(shallow(<Option/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<Option/>)).toMatchSnapshot();
	});
});