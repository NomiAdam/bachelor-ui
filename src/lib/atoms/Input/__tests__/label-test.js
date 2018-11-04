/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import Label from '../Label';

describe('Label', () => {
	it('should be defined', () => {
		expect(shallow(<Label/>)).toBeDefined();
	});
	it('should match the snapshot', () => {
		expect(shallow(<Label/>)).toMatchSnapshot();
	});
});
