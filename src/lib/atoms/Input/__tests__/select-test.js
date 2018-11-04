/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import Select from '../Select';

describe('Select', () => {
	it('should be defined', () => {
		expect(shallow(<Select/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<Select/>)).toMatchSnapshot();
	});
});